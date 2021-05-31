CREATE DATABASE rock;

USE rock;

CREATE TABLE band (
	band_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    info TEXT,
    image VARCHAR(100),
    video VARCHAR(250)
);

SELECT * FROM band;

INSERT INTO band (name, info, image, video) VALUES 
('The Rolling Stones',
'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962 por Brian Jones, Mick Jagger, 
Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart. Están considerados como una de las más grandes e influyentes bandas de toda la historia del rock,
siendo una de las agrupaciones que sentó las bases del rock contemporáneo. 
Contando desde sus inicios con el favor de la crítica, algunos de sus materiales 
están considerados de los mejores de todos los tiempos;7​8​9​10​ entre ellos destacan Beggars Banquet (1968), Let It Bleed (1969), Sticky Fingers (1971) y quizá 
su mejor obra, Exile on Main St. (1972).nota 1​ En 1989 fueron incluidos en el Salón de la Fama del Rock and Roll, y en 2004 la revista estadounidense Rolling Stone 
los colocó en el puesto n.º 4 en su lista de Los 50 mejores artistas de todos los tiempos.11​ Ningún grupo de rock hasta la fecha ha sostenido tan duradera y todavía 
mundialmente reconocida trayectoria como The Rolling Stones; con Jagger, Richards y Watts como miembros fundadores en activo, continúan siendo la banda más longeva de la historia del rock.',
'rollingstones', 'https://www.youtube.com/watch?v=nrIPxlFzDi0'),
('Led Zeppelin',
'Led Zeppelin fue un grupo británico de hard rock fundado en Londres en 1968 por el guitarrista Jimmy Page. La banda estuvo integrada por John Paul Jones 
como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería (que había coincidido con Plant en The Band of Joy).
Led Zeppelin presentó elementos de un amplio espectro de influencias, como el blues, el rock and roll, el soul, la música celta, la música india, el folk, y el country, 
siendo uno de los grupos seminales para el surgimiento del heavy metal.
Más de cuarenta años después de la disgregación de la banda en 1980, la música de Led Zeppelin continúa vendiéndose, disfruta de una amplia difusión radiofónica, 
y ha demostrado ser una de las bandas más influyentes en la música rock. Hasta la fecha, ha vendido más de 300 millones de álbumes en el mundo, incluidos 111 millones 
solo en los Estados Unidos.3​ Es la segunda banda con más discos de diamante de la historia de la música (otorgados cada diez millones de ventas en EE. UU.) con 5, 
después de The Beatles que tienen 6. Los discos con esta certificación son: Led Zeppelin IV (23 millones), Physical Graffiti (15 millones), Led Zeppelin II (12 millones), 
Houses of the Holy (11 millones) y Led Zeppelin I (10 millones)4​. En 2004, la revista Rolling Stone los clasificó en el número 14 en su lista de los 
«100 artistas más grandes de todos los tiempos».',
'ledzeppelin', 'https://www.youtube.com/watch?v=xbhCPt6PZIU'),
('Queen',
'Queen es una banda británica de rock formada en 1970 en Londres por el cantante y pianista Freddie Mercury, el guitarrista Brian May, 
el baterista Roger Taylor y el bajista John Deacon.',
'queen', 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ'),
('Pink Floyd',
'Pink Floyd fue una banda de rock británica, fundada en Londres en 1965. Es considerada un ícono cultural del siglo XX y una de las bandas más influyentes 
y aclamadas en la historia de la música, obtuvieron gran popularidad gracias a su música psicodélica que evolucionó hacia el rock progresivo y rock sinfónico 
con el paso del tiempo.
Inicialmente el grupo estaba formado por el batería Nick Mason, el teclista y vocalista Richard Wright, el bajista y vocalista Roger Waters y el guitarrista 
y vocalista principal Syd Barrett, quien se convirtió en el primer líder de la banda.
Es conocida por sus canciones de alto contenido filosófico, la experimentación sónica, las innovadoras portadas de sus discos y sus elaborados espectáculos en vivo. 
Sus ventas sobrepasan los 350 millones de álbumes vendidos en todo el mundo,4​5​ 97,5 millones de ellos solamente en los Estados Unidos.',
'pinkfloyd', 'https://www.youtube.com/watch?v=YR5ApYxkU-U'),
('Deep Purple',
'Deep Purple es una banda británica de hard rock formada en 1968 en Hertford, Reino Unido. Está considerada como una de las pioneras de dicho subgénero, 
y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath. Su música ha incorporado elementos del rock progresivo, rock sinfónico, rock psicodélico, 
blues rock, funk rock, britpop y la música clásica. Deep Purple ha vendido más de 150 millones de discos en todo el mundo.
El grupo fue considerado "la banda más ruidosa del planeta" por el libro Guinness de los récords en la edición de 1974 debido al concierto que realizaron 
en el Rainbow Theatre de Londres, el 30 de junio de 1972, en el cual se midieron 117 decibelios. En 2013 una encuesta realizada por la emisora de radio británica 
Planet Rock situó a Deep Purple en el 5º lugar de las "bandas más influyentes de la historia".',
'deeppurple', 'https://www.youtube.com/watch?v=UAKCR7kQMTQ'),
('AC/DC',
'AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm y Angus Young.
Sus álbumes se han vendido en un total estimado de 200 millones de copias,3​4​ embarcándose en giras multitudinarias por todo el mundo, y sus éxitos han musicalizado 
varias producciones cinematográficas sobresalientes.5​6​7​8​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden. 
Mucho de ello se debe al extravagante estilo de su guitarrista principal y símbolo visual, Angus Young; quien asume el rol de guitarrista principal durante los 
conciertos, gracias a sus dinámicos y adrenalínicos despliegues escénicos uniformado de colegial callejero.
En 1974, la llegada del cantante Bon Scott se convertiría en pieza clave del éxito del grupo. Su presencia en escena, lo convirtió en uno de los personajes más 
carismáticos de la historia del hard rock. La formación se estabilizaría con Cliff Williams (bajo) y Phil Rudd.',
'acdc', 'https://www.youtube.com/watch?v=pAgnJDJN4VA'),
('The Ramones',
'Ramones fue una banda de punk formada en Forest Hills, en el distrito de Queens (Nueva York, Estados Unidos) en 1974, y disuelta veintidós años más tarde, en 1996.
Pioneros y líderes del naciente punk cimentaron las bases de este género musical con composiciones simples, minimalistas, repetitivas y letras muy simples o incluso 
sin sentido, en clara oposición a la pomposidad y la fastuosidad de las bandas que triunfaban en el mercado de los años 1970:3​4​ con sus largos solos de guitarra, las 
complejas canciones de rock progresivo y sus enigmáticas letras.5​ Su sonido se caracteriza por ser rápido y directo, con influencias del rockabilly de los años 1950, 
el surf rock, The Beatles, The Who, The Velvet Underground, las bandas de chicas de los años 1960 como The Shangri-Las y el garage protopunk de MC5 y The Stooges.',
'ramones', 'https://www.youtube.com/watch?v=bm51ihfi1p4'),
('Kiss',
'Kiss (estilizado KISS) es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, 
a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley.
Conocidos por su maquillaje facial y sus extravagantes trajes, el grupo se dio a conocer al público a mediados de los años 1970 gracias a sus actuaciones en directo, 
en las que incluían pirotecnia, llamaradas, cañones, baterías elevadoras, guitarras con humo y sangre falsa. Si se tienen en cuenta los álbumes en solitario de 1978, 
Kiss ha conseguido treinta discos de oro de la RIAA hacia 2015 y se la considera la banda estadounidense que ha recibido más de estas certificaciones. 
Desde su formación, los miembros de Kiss asumieron personalidades acordes con los maquillajes y vestimenta que llevaban, así Simmons asumió el rol de «Demon», 
Stanley el de «Starchild», Criss el de «Catman» y Frehley el de «Space Ace» o «Spaceman».',
'kiss', 'https://www.youtube.com/watch?v=ZhIsAZO5gl0');