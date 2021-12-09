variable "region" {
  description = "The region where resources should be created"
  default     = "europe-west6"
}

variable "gcr_region" {
  description = "The super-region where resources should be created"
  default     = "eu"
}

variable "project" {
  description = "The project where resources should be created"
  default     = "portfolio-alinalihassan"
}

variable "app_port" {
  description = "The port where the application should be exposed"
  default     = "3000"
}

variable "domain_name" {
  description = "Domain name of the application"
  default     = "alinalihassan.com"
}

variable "domain_name_alt" {
  description = "Domain name alternative of the application"
  default     = "hassanalinali.com"
}