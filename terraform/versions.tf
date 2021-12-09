terraform {
  required_version = ">= 1.1.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.3.0"
    }
  }

  backend "remote" {
    organization = "alinalihassan"

    workspaces {
      name = "portfolio"
    }
  }
}
