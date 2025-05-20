pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente1_1"
                    }
                    steps {
                        git url: 'https://github.com/JavierCF07/Paralelo_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run cypress run --record --key 827180c4-665b-45ab-b45c-83b0aa1fad2a  --parallel'
                    }
                }
                stage('Slave 2') {
                    agent {
                        label "Agente1_2"
                    }
                    steps {
                        git url: 'https://github.com/JavierCF07/Paralelo_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run cypress run --record --key 827180c4-665b-45ab-b45c-83b0aa1fad2a  --parallel'
                    }
                }
                stage('Slave 3') {
                    agent {
                        label "Agente1_3"
                    }
                    steps {
                        git url: 'https://github.com/JavierCF07/Paralelo_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run cypress run --record --key 827180c4-665b-45ab-b45c-83b0aa1fad2a  --parallel'
                    }
                }
                stage('Slave 4') {
                    agent {
                        label "Agente1_4"
                    }
                    steps {
                        git url: 'https://github.com/JavierCF07/Paralelo_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run cypress run --record --key 827180c4-665b-45ab-b45c-83b0aa1fad2a  --parallel'
                    }
                }
            }
        }
    }
}