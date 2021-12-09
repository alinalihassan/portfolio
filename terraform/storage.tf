resource "google_storage_bucket" "assets" {
  name          = "alinalihassan-portfolio-assets"
  location      = "EU"
  force_destroy = true
}

resource "google_storage_default_object_access_control" "assets_public_access" {
  bucket = google_storage_bucket.assets.name
  role   = "READER"
  entity = "allUsers"
}
