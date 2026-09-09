pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Code checked out successfully'
            }
        }
        stage('Install Docker CLI') {
            steps {
                sh 'apt-get update && apt-get install -y docker.io'
            }
        }
        stage('Build Docker Image') {
            steps {
                dir('Backend') {
                    sh 'docker build -t logistics-backend .'
                }
            }
        }
    }
}