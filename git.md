# Tips

#### How to do my first commit and add a remote repository

```md
git init <crea nuestro repo local>
git add README.md <agrega los cambios a nuestro ambiente STAGE>
git commit -m "first commit" <sube los archivos del STAGE a nuestro repo local>
git remote add origin https://github.com/here-your/code.git
git push -u origin master
```

---

#### Clone repository

```md
git clone https://github.com/here-your/code.git
git clone https://github.com/here-your/code.git nombre-de-mi-carpeta-a-crear
```

---

#### Pull vs Fetch

```md
git pull <baja el codigo de nuestro repo, y hace un merge de forma automatica>
git fecth <baja el codigo de nuestro repo, sin hacer merge>
```

---

### Main configurations

```md
git config --global user.name "myName"
git config --global user.email "my@email.com"
git config -l <para ver en modo read-only la configuracion>
git config --global -e <para abrir el archivo y editarlo>
```

---

#### And more...

```md
pwd <ver el path actual>
git --version <ver la version que tenemos instalada>
git help <ver una breve lista de ayuda>
git help commit <ver la ayuda de un comando en particular>
```

---

#### Alias

```md
git config --global alias.lg "log --oneline --decorate --all --graph"
git config --global alias.s "status -s -b"
```

---

#### Remove changes from Stage

```md
git reset <nombre/path del archivo a quitar>
```

---

#### Rollback changes (come back to origin status)

```md
git checkout <nombre/path del archivo a quitar>
git checkout -- . <rollback all changes of all files>
```

---
