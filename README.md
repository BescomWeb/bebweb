Project Architecture

BescomWeb
       --bebweb       -(application to handel multiple Projects)
            --Projects
                    --beb-core     ->(all the Core Architecture of Application is present Here)
                    --shared
                       -lib
                         -common-ui ->(it contains all the application Shared Components this is can be reused in multiple PRojects)


project Creation
1)ng new Project --create-applicatio=false
To Create angular application use Below Command
2)ng generate application exampleApp
To Create angular Library use Below Command
3)ng generate library 


Run Application
Run the Application Locally
1)npm run serve
build Application
2)npm run build
Generating Publish Files
3)npm run build-prod




