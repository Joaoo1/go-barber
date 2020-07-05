import app from './app';

// Separating the listen method to avoid server to initialize in tests
app.listen(3333);
