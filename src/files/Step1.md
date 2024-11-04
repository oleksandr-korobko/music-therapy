Ось короткий підсумок наших кроків з налаштування Whisper в Google Colab:

1. Початкові налаштування GPU:
```python
# В меню Runtime -> Change runtime type вибрати T4 GPU
# Перевірити GPU
!nvidia-smi
```

2. Встановлення бібліотек:
```python
!pip install torch torchvision torchaudio
!pip install openai-whisper
!pip install setuptools-rust
```

3. Завантаження моделі:
```python
import whisper
import torch

print("GPU доступний:", torch.cuda.is_available())
model = whisper.load_model("large-v3")
```

4. Підключення Google Drive:
```python
from google.colab import drive
drive.mount('/content/drive')

# Створення робочої папки
!mkdir -p '/content/drive/My Drive/whisper_project'
```
