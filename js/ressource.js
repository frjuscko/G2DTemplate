const slides = document.querySelector('.slides');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', () => {
    defileAgauche(slides);
} )

prev.addEventListener('click', () => {
    defileAdroitee(slides);
} )

function defileAgauche(slide) {
    slide.style.transform = 'translateX(-50%)';
}
function defileAdroitee(slide) {
    slide.style.transform = 'translateX(0)';
}

// Stockage des fichiers sélectionnés
        let selectedFiles = [];

        // Éléments DOM
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const filesList = document.getElementById('filesList');
        const form = document.getElementById('resourceForm');
        const messageDiv = document.getElementById('message');

        // Fonction pour formater la taille du fichier
        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        // Fonction pour obtenir l'icône en fonction du type de fichier
        function getFileIcon(file) {
            const type = file.type;
            if (type.startsWith('image/')) return '🖼️';
            if (type.startsWith('video/')) return '🎬';
            if (type === 'application/pdf') return '📄';
            if (type.includes('word')) return '📝';
            if (type.includes('presentation')) return '📊';
            return '📎';
        }

        // Fonction pour créer l'aperçu du fichier
        function createPreview(file) {
            return new Promise((resolve) => {
                const previewDiv = document.createElement('div');
                previewDiv.className = 'file-preview';
                
                const type = file.type;
                
                if (type.startsWith('image/')) {
                    const img = document.createElement('img');
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        img.src = e.target.result;
                        previewDiv.appendChild(img);
                        resolve(previewDiv);
                    };
                    reader.readAsDataURL(file);
                } 
                else if (type.startsWith('video/')) {
                    const video = document.createElement('video');
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        video.src = e.target.result;
                        video.preload = 'metadata';
                        previewDiv.appendChild(video);
                        resolve(previewDiv);
                    };
                    reader.readAsDataURL(file);
                }
                else {
                    const iconSpan = document.createElement('span');
                    iconSpan.className = 'file-icon';
                    iconSpan.textContent = getFileIcon(file);
                    previewDiv.appendChild(iconSpan);
                    resolve(previewDiv);
                }
            });
        }

        // Fonction pour afficher les fichiers
        async function displayFiles() {
            filesList.innerHTML = '';
            
            for (let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                fileItem.dataset.index = i;
                
                // Aperçu
                const preview = await createPreview(file);
                
                // Informations
                const infoDiv = document.createElement('div');
                infoDiv.className = 'file-info';
                infoDiv.innerHTML = `
                    <div class="file-name">${file.name}</div>
                    <div class="file-size">${formatFileSize(file.size)}</div>
                    <div class="file-type">${file.type || 'Fichier'}</div>
                `;
                
                // Bouton de suppression
                const actionsDiv = document.createElement('div');
                actionsDiv.className = 'file-actions';
                const removeBtn = document.createElement('button');
                removeBtn.type = 'button';
                removeBtn.className = 'remove-btn';
                removeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>';
                removeBtn.onclick = () => removeFile(i);
                actionsDiv.appendChild(removeBtn);
                
                fileItem.appendChild(preview);
                fileItem.appendChild(infoDiv);
                fileItem.appendChild(actionsDiv);
                
                filesList.appendChild(fileItem);
            }
        }

        // Fonction pour ajouter des fichiers
        function addFiles(files) {
            const validFiles = Array.from(files).filter(file => {
                // Vérifier la taille (max 100MB)
                if (file.size > 100 * 1024 * 1024) {
                    showMessage(`Le fichier ${file.name} dépasse 100MB`, 'error');
                    return false;
                }
                return true;
            });
            
            selectedFiles.push(...validFiles);
            displayFiles();
            
            // Afficher un message de succès
            if (validFiles.length > 0) {
                showMessage(`${validFiles.length} fichier(s) ajouté(s) avec succès`, 'success');
            }
        }

        // Fonction pour supprimer un fichier
        function removeFile(index) {
            selectedFiles.splice(index, 1);
            displayFiles();
            showMessage('Fichier supprimé', 'success');
        }

        // Fonction pour afficher les messages
        function showMessage(msg, type) {
            messageDiv.textContent = msg;
            messageDiv.className = type === 'error' ? 'error-message' : 'success-message';
            messageDiv.style.display = 'block';
            
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 3000);
        }

        // Gestionnaires d'événements pour le drag & drop
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('drag-over');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('drag-over');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('drag-over');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                addFiles(files);
            }
        });

        // Bouton d'upload
        uploadBtn.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                addFiles(e.target.files);
                fileInput.value = ''; // Réinitialiser pour permettre de re-sélectionner les mêmes fichiers
            }
        });

        // Soumission du formulaire
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const title = document.getElementById('title').value;
            
            if (!title) {
                showMessage('Veuillez saisir un titre', 'error');
                return;
            }
            
            if (selectedFiles.length === 0) {
                showMessage('Veuillez sélectionner au moins un fichier', 'error');
                return;
            }
            
            // Créer FormData pour l'envoi
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', document.getElementById('description').value);
            
            selectedFiles.forEach((file, index) => {
                formData.append(`files[${index}]`, file);
            });
            
            // Simulation d'envoi
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.disabled = true;
            submitBtn.textContent = '⏳ Publication en cours...';
            
            // Simuler une requête API (remplacez par votre vrai endpoint)
            setTimeout(() => {
                console.log('Données à envoyer:', {
                    title: title,
                    description: document.getElementById('description').value,
                    files: selectedFiles.map(f => ({ name: f.name, size: f.size, type: f.type }))
                });
                
                showMessage('✅ Ressource publiée avec succès !', 'success');
                submitBtn.disabled = false;
                submitBtn.textContent = '📤 Publier la ressource';
                
                // Réinitialiser le formulaire (optionnel)
                // form.reset();
                // selectedFiles = [];
                // displayFiles();
            }, 1500);
        });

        // Ajouter le style pour les messages d'erreur
        const style = document.createElement('style');
        style.textContent = `
            .error-message {
                background: #f8d7da;
                color: #721c24;
                padding: 12px;
                border-radius: 8px;
                margin-top: 15px;
                text-align: center;
                font-size: 14px;
            }
        `;
        document.head.appendChild(style);
