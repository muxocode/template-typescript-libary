pipeline {
    agent any
    tools {nodejs "NodeJS"}
    parameters {
        string(name: 'npm_ServerUrl', defaultValue: 'http://10.1.5.49:4873', description: 'npm server to publish')
        string(name: 'docker_Port', defaultValue: "5001", description: 'port to publish')
        string(name: 'sonar_ProjectKey', defaultValue: "ULISES_FRONT", description: 'key for SonarQube')
        string(name: 'sonar_source', defaultValue: ".", description: 'source to analisys')    
    }

    stages {
        stage('prueba') {
            steps {
                withSonarQubeEnv('SonarGamesa') {
                    sh "echo hola"
                }
            }
        }

        /*
        stage('Sonarqube') {
            environment {
                scannerHome = tool 'SonarScanner'
                execParams = "-Dsonar.projectKey=${params.sonar_ProjectKey} -Dsonar.sources=${params.sonar_source}"
            }
            steps {
                withSonarQubeEnv('SonarGamesa') {
                    sh "${scannerHome}/bin/sonar-scanner ${execParams}"
                }
            }
        }
        stage("install & test")
        {
            stages
            {
                stage('npm set registry') {
                    steps {
                        sh "npm set registry ${params.npm_ServerUrl}"
                    }
                }
                stage('npm install') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('npm set registry to npmjs') {
                    steps {
                        sh "npm set registry https://registry.npmjs.org"
                    }
                }
                stage('npm Tests') {
                    steps {
                        sh 'npm run test'
                    }
                }
            }
            post{
                failure {
                    sh "npm set registry https://registry.npmjs.org"
                }
            }
        }
        {
            parallel
            {
                stage('npm publish') {
                    steps {
                        sh "npm publish --registry  ${params.npm_ServerUrl}"
                    }
                }
                stage('docker')
                {
                    stages
                    {
                        stage('Dockers stop') {
                            steps {
                                sh 'docker container ls -aq -f name=ulisesmock | xargs -r docker container stop' 
                            }
                        }
                        stage('Dockers build') {
                            steps {
                                sh 'docker build . -t ulisesmock' 
                            }
                        }
                        stage('Dockers run') {
                            steps {
                                sh "docker run -d --rm -p ${params.docker_Port}:3000 --name ulisesmock ulisesmock"
                            }
                        }
                    }
                }
            }
        }   */
    }
/*
    post{
        always
        {
            echo 'think twice, code once'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
    */
}