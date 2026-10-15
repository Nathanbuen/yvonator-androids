# Yvonator App

Aplicativo Android do Yvonator, um Akinator de professores da escola.

## Desenvolvimento local

```bash
npm install
npx cap sync android
```

Para gerar o APK localmente, é necessário ter o Android SDK instalado:

```bash
cd android
./gradlew assembleDebug
```

O APK será gerado em `android/app/build/outputs/apk/debug/app-debug.apk`.

## GitHub Actions

Cada push na branch `main` ou execução manual do workflow **Build Android APK** gera o APK como artefato para download na aba **Actions**.
