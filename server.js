import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`escultando a porta ${port}, http://localhost:${port}`);
});
