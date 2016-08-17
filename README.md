```
                   ,,,, 
             ,;) .';;;;',
 ;;,,_,-.-.,;;'_,|I\;;;/),,_
  `';;/:|:);{ ;;;|| \;/ /;;;\__
      L;/-';/ \;;\',/;\/;;;.') \
      .:`''` - \;;'.__/;;;/  . _'-._ 
    .'/   \     \;;;;;;/.'_7:.  '). \_
  .''/     | '._ );}{;//.'    '-:  '.,L
.'. /       \  ( |;;;/_/         \._./;\   _,
 . /        |\ ( /;;/_/  shazam     ';;;\,;;_,
. /         )__(/;;/_/       carai    (;;'''''
 /        _;:':;;;;:';-._             );
/        /   \  `'`   --.'-._         \/
       .'     '.  ,'         '-,
      /    /   r--,..__       '.\
    .'    '  .'        '--._     ]
    (     :.(;>        _ .' '- ;/
    |      /:;(    ,_.';(   __.'
     '- -'"|;:/    (;;;;-'--'
           |;/      ;;(
           ''      /;;|
                   \;;|
                    \/
```

# Shazam

O Shazam é um package de Node para facilitar a criação e gerenciamento de **Single Page Apps**.

# Instalar

Para instalar basta rodar no terminal:

```bash
$ npm i -g @drvem/shazam
```

# Uso

Após instalar o Shazam de forma global, você já pode rodar o comando responsável para criar seu projeto:

```bash
$ shazam init [nome-do-projeto]
```

O comando `init` crirá a pasta com os [arquivos base para o projeto](./template), depois basta você inicializar o server de desenvolvimento:

```bash
$ cd [nome-do-projeto]
$ shazam start
```

É preciso que você esteja na raíz do projeto para conseguir rodar o comando de `start`.

# Build

Para fazer o build do projeto basta rodar o seguinte comando:

```bash
$ shazam build
```