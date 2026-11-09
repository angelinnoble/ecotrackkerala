# Use official Nginx image as a lightweight web server
FROM nginx:alpine

# Copy static assets into Nginx html folder
COPY . /usr/share/nginx/html

# Remove default Nginx config and add a simple one
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (OpenShift will map to 8080 internally)
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

