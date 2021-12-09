# Cloud Domains API
resource "google_project_service" "service_usage" {
  service                    = "domains.googleapis.com"
  disable_dependent_services = true
  disable_on_destroy         = true
}

# CloudRun API
resource "google_project_service" "cloud_run" {
  service                    = "run.googleapis.com"
  disable_dependent_services = true
  disable_on_destroy         = true
}

# Cloud DNS API
resource "google_project_service" "cloud_dns" {
  service                    = "dns.googleapis.com"
  disable_dependent_services = true
  disable_on_destroy         = true
}

# Cloud Resource Manager API
resource "google_project_service" "cloud_resource_manager" {
  service                    = "cloudresourcemanager.googleapis.com"
  disable_dependent_services = true
  disable_on_destroy         = true
}

# Container API
resource "google_project_service" "container_registry" {
  service                    = "containerregistry.googleapis.com"
  disable_dependent_services = true
  disable_on_destroy         = true
}

# Compute Engine API
resource "google_project_service" "compute_engine" {
  service                    = "compute.googleapis.com"
  disable_dependent_services = true
  disable_on_destroy         = true
}

