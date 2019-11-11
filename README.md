# AIR 2019 - Team FB - Lifelong Medical Care Repo

This repo is for the Lifelong Medical Care Client site.
The idea is to use GatsbyJS to make a decoupled WP site for the client. This will help us streamline the front-end development since neither dev knows WP, as well as create a flexible and performant site.

## Architecture
The site is broken down into GatsbyJS Themes so that parts of the site can be abstracted away.

### lifelong-wp-source
This theme handles the data abstraction between the site and the WP backend.

## Setup:

1. Clone the repo
2. Install Dependencies
    - The site uses yarn workspaces
    - For each folder, you'll need to run ```bash yarn workspace {folderName}``` to install the appropriate dependencies



## Interesting Next Steps
1. Integrate google maps in iframe.  Pricing: https://cloud.google.com/maps-platform/pricing/
