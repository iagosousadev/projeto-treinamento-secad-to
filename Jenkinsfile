pipeline {
	agent any
	parameters{
		choice(choices: ['true', 'false'], description: 'Selecione se quer usar conexões de banco e parâmetros dentro do conteiner.', name: 'CRONAPP_USE_CONTEXT')
		choice(choices: ['DEV', 'PROD'], description: 'Selecione o perfil do banco de dados (TIER).', name: 'CRONAPP_TIER')
		choice(choices: ['true', 'false'], description: 'Incluir projeto mobile.', name: 'CRONAPP_MOBILE_APP')
		string(defaultValue: 'https://index.docker.io/v1/', description: 'URL do Registry (padrão é o docker hub).', name: 'CRONAPP_DOCKER_REGISTRY', trim: false)
		string(defaultValue: 'INFO_SEU_USUARIO/NOMEDAIMAGEM', description: 'Informe o nome de sua imagem (se for registry privado, informe o caminho completo).', name: 'CRONAPP_DOCKER_IMAGE_NAME', trim: false)
		string(defaultValue: 'INFO_ID_CREDENCIAL_DOCKERHUB', description: 'Informe a credencial (secret) usada para acesso ao registry.', name: 'CRONAPP_DOCKERHUB_ACCESS', trim: false)
		string(defaultValue: 'INFO_URL_REPO_GIT_HTTPS', description: 'Informe o endereço HTTPS do repositório Git.', name: 'CRONAPP_GIT_URL', trim: false)
		string(defaultValue: 'INFO_ID_CREDENCIAL_GITHUB', description: 'Informe a credencial (secret) usada para acesso ao reposotório Git.', name: 'CRONAPP_GIT_USERPASS', trim: false)
	}
	stages {
		stage('Git Clone') {
			steps {
				checkout([$class: 'GitSCM', branches: [[name: '${CRONAPP_TAG_VERSION}']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'CloneOption', noTags: false, reference: '', shallow: false]], submoduleCfg: [], userRemoteConfigs: [[credentialsId: "${CRONAPP_GIT_USERPASS}", url: "${CRONAPP_GIT_URL}"]]])
			}
		}
		stage('Maven and Docker Build') {
			steps {
				sh '''
					docker build -t ${CRONAPP_DOCKER_IMAGE_NAME}:${CRONAPP_TAG_VERSION}-${CRONAPP_TIER} --build-arg TIER=${CRONAPP_TIER} --build-arg CONTEXT_USE=${CRONAPP_USE_CONTEXT} --build-arg MOBILE_APP=${CRONAPP_MOBILE_APP} .
				'''
			}
		}
		stage('Docker Push') {
			steps {
				withDockerRegistry(credentialsId: "${CRONAPP_DOCKERHUB_ACCESS}", url: "${CRONAPP_DOCKER_REGISTRY}") {
					sh '''
						docker push ${CRONAPP_DOCKER_IMAGE_NAME}:${CRONAPP_TAG_VERSION}-${CRONAPP_TIER}
					'''
				}
			}
		}
		stage('Docker Clean') {
			steps {
				sh '''
					docker image prune -f
				'''
			}
		}
	}
}
