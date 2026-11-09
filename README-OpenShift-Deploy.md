# EcoTrack Kerala – OpenShift Deployment Guide

This guide walks you through deploying the **EcoTrack Kerala** static web application to **Red Hat OpenShift Service on AWS** (project `angelinnoble2028-dev`).

---
## Prerequisites
1. **OpenShift CLI (`oc`)** installed on your Windows machine.
   * Download the latest Windows zip from:
     https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest/
   * Extract `oc.exe` and add its folder to your `PATH` (e.g., `C:\Program Files\OpenShift`).
   * Verify installation:
     ```powershell
     oc version
     ```
2. **Access to the OpenShift cluster** – you need a login token.
   * In the OpenShift console, click your user name → **Copy Login Command**.
   * Use the `--token` value shown.
3. **Project already created** – the project `angelinnoble2028-dev` exists (as you indicated).

---
## Repository layout (already present)
```
smart waste/               # workspace root
│   Dockerfile            # builds Nginx image
│   nginx.conf            # minimal Nginx config
│   openshift.yaml        # all OpenShift resources
│   index.html
│   css/style.css
│   js/*.js
│   data/*.js
│   assets/…
```

---
## Step‑by‑step deployment
```powershell
# 1. Open a new PowerShell window (so the updated PATH is recognised)
# 2. Verify oc is on the PATH
oc version

# 3. Log in to the cluster (replace <TOKEN> with the token you copied)
oc login https://console-openshift-console.apps.rm2.thpm.p1.openshiftapps.com --token=<TOKEN>

# 4. Switch to the target project
oc project angelinnoble2028-dev

# 5. Apply the manifests (creates ImageStream, BuildConfig, Deployment, Service, Route)
oc apply -f openshift.yaml

# 6. Start a binary build – this uploads the current directory (Dockerfile + static files)
oc start-build ecotrack-build --from-dir=. --follow

# 7. Watch the pod become ready
oc get pods -w

# 8. Retrieve the public route URL
oc get route ecotrack -o jsonpath='{.spec.host}'
# Open the printed URL in a browser.
```

---
## What the manifests do
| Resource | Purpose |
|----------|---------|
| **ImageStream** `ecotrack-image` | Holds the built container image. |
| **BuildConfig** `ecotrack-build` | Binary Docker build that uses the `Dockerfile` in this repo. |
| **Deployment** `ecotrack-deploy` | Deploys a pod running Nginx on port 80. Liveness/readiness probes hit `/`. |
| **Service** `ecotrack-svc` | Exposes the pod internally on port 80. |
| **Route** `ecotrack` | Provides an HTTPS URL (edge‑terminated TLS) for external access. |

---
## Troubleshooting tips
- **`oc` not found** – see the *Prerequisites* section to install it.
- **Build fails** – ensure `Dockerfile` and `nginx.conf` exist at the repo root (they do).
- **Image pull errors** – verify you are logged into the correct project/cluster; the image registry URL in the Deployment uses the internal service `image-registry.openshift-image-registry.svc:5000` which works only inside the cluster.
- **Route returns 404** – double‑check that `index.html` is at the repository root; Nginx serves files from `/usr/share/nginx/html`.
- **Map tiles not loading** – the app loads tiles from the public OSM CDN; ensure the pod can reach the internet (most OpenShift clusters allow outbound HTTP).

---
## Optional enhancements
- Add resource **limits/requests** to the container spec.
- Enable **automatic image rebuild** on source changes with a webhook or GitOps tool.
- Configure **horizontal pod autoscaling** if traffic grows.
- Add **persistent storage** for any future dynamic data.

---
*All files (`Dockerfile`, `nginx.conf`, `openshift.yaml`) are already present in the workspace. Apply the steps above and your EcoTrack Kerala app will be live on OpenShift.*

