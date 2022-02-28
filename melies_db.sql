-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-02-2022 a las 19:09:41
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `melies_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avatars`
--

CREATE TABLE `avatars` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Clásica'),
(2, 'Moderna'),
(3, 'Estreno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formats`
--

CREATE TABLE `formats` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `formats`
--

INSERT INTO `formats` (`id`, `name`) VALUES
(1, '2D'),
(2, '3D');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Drama'),
(2, 'Comedia'),
(3, 'Fantasía'),
(4, 'Animación'),
(5, 'Histórica'),
(6, 'Superhéroes'),
(7, 'Ciencia Ficción'),
(8, 'No-ficción'),
(9, 'Musical'),
(10, 'Aventuras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `url`) VALUES
(1, 'cocacolachica.jpg'),
(2, 'pochoclomediano.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `languages`
--

INSERT INTO `languages` (`id`, `name`) VALUES
(1, 'Original subtitulada'),
(2, 'Doblada al español'),
(3, 'Español');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `productLink` varchar(255) NOT NULL,
  `productDescription` text NOT NULL,
  `image_id` int(11) NOT NULL,
  `restriction_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `productName`, `genre_id`, `category_id`, `productLink`, `productDescription`, `image_id`, `restriction_id`) VALUES
(1, 'The Big Heat', 1, 1, 'https://www.youtube.com/watch?v=dLLAspkOv3w', 'Tras suicidarse, el policía Tom Duncan deja una carta en la que confiesa haberse dejado sobornar por una banda de gángsters, pero también denuncia la corrupción de altos funcionarios. Cuando el sargento Dave Bannion trata de esclarecer su muerte, empieza a tropezar con toda clase de obstáculos.', 1, 3),
(2, 'Phantom Lady', 1, 1, 'https://www.youtube.com/watch?v=iH5ZPIsI6-M', 'Una secretaria busca sin cesar a la mujer misteriosa que puede probar que su jefe no es un asesino.', 2, 2),
(3, 'The Big Combo', 1, 1, 'https://www.youtube.com/watch?v=iIkCXF9Y4ow', 'Un teniente de la policía que es presionado por una pandilla dirigida por un gánster vicioso. Él es ayudado por la esposa del criminal, celosa del romance de su marido con otra mujer, quien le proporciona información para ayudarlo a cerrarle la red a su enemigo.', 3, 2),
(4, 'Double Indemnity', 1, 1, 'https://www.youtube.com/watch?v=yKrrAa2o9Eg', 'Historia de la angustia de una mujer que convence a su amante para que asesine a su marido para cobrar el seguro, pero aún así las cosas no salen como estaban previstas.', 4, 2),
(5, 'Dune', 7, 2, 'https://www.youtube.com/watch?v=vW-PHNZ-Xww', 'Arrakis, también denominado \'Dune\', se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar.', 5, 2),
(6, 'Maligno', 1, 2, 'https://www.youtube.com/watch?v=I2j_S0Oln1U', 'Madison está paralizada por visiones de asesinatos espeluznantes, y su tormento empeora cuando descubre que estos sueños de vigilia son, de hecho, realidades aterradoras.', 6, 3),
(7, 'Eternals', 3, 2, 'https://www.youtube.com/watch?v=MKWXuj3ZYf0', 'Los Eternos son una raza de seres inmortales con poderes sobrehumanos que han vivido en secreto en la Tierra durante miles de años. Aunque nunca han intervenido en el destino de la población, ahora una amenaza se cierne sobre la humanidad.', 7, 2),
(8, 'Matrix', 7, 2, 'https://www.youtube.com/watch?v=kV6tJtU7znU', 'Thomas Anderson lleva una vida cómoda como una eminencia dentro del mundo de los videojuegos, pero tiene problemas para discernir entre lo que es realidad y lo que no lo es. Thomas deberá decidir si sigue al conejo blanco una vez más.', 8, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moviescreenings`
--

CREATE TABLE `moviescreenings` (
  `id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `screening_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `moviescreenings`
--

INSERT INTO `moviescreenings` (`id`, `movie_id`, `screening_id`) VALUES
(1, 1, 1),
(2, 2, 6),
(3, 3, 5),
(4, 4, 2),
(5, 5, 7),
(6, 6, 8),
(7, 7, 3),
(8, 8, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posters`
--

CREATE TABLE `posters` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posters`
--

INSERT INTO `posters` (`id`, `url`) VALUES
(1, 'the-big-heat.jpg'),
(2, 'phantom-lady.jpg'),
(3, 'the-big-combo.jpg'),
(4, 'double-indemnity.jpg'),
(5, 'dune.jpg'),
(6, 'maligno.jpg'),
(7, 'Eternals.jpg'),
(8, 'matrix.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prodtypes`
--

CREATE TABLE `prodtypes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prodtypes`
--

INSERT INTO `prodtypes` (`id`, `name`) VALUES
(1, 'Bebidas'),
(2, 'Alimento'),
(3, 'Combo'),
(4, 'Abono mensual'),
(5, 'Abono anual');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type_id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image_id` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `type_id`, `description`, `image_id`, `price`) VALUES
(1, 'Coca cola chica', 1, 'Coca Cola 500ml', 1, 250),
(2, 'Pochoclo mediano', 2, 'Balde de pochoclo mediano', 2, 350);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restrictions`
--

CREATE TABLE `restrictions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `restrictions`
--

INSERT INTO `restrictions` (`id`, `name`) VALUES
(1, 'ATP'),
(2, 'Mayores de 13'),
(3, 'Mayores de 16'),
(4, 'Mayores de 18'),
(5, 'Condicionada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `screenings`
--

CREATE TABLE `screenings` (
  `id` int(11) NOT NULL,
  `day` varchar(255) NOT NULL,
  `hour` int(11) NOT NULL,
  `screen_id` int(11) NOT NULL,
  `discount` tinyint(1) NOT NULL,
  `language_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `screenings`
--

INSERT INTO `screenings` (`id`, `day`, `hour`, `screen_id`, `discount`, `language_id`) VALUES
(1, 'Lunes', 1400, 1, 0, 1),
(2, 'Martes', 1800, 2, 0, 1),
(3, 'Miércoles', 1400, 4, 1, 1),
(4, 'Jueves', 2000, 3, 0, 1),
(5, 'Viernes', 1200, 4, 1, 1),
(6, 'Sábado', 1200, 2, 1, 1),
(7, 'Sábado', 2100, 1, 0, 1),
(8, 'Domingo', 1300, 3, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `screens`
--

CREATE TABLE `screens` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `rows` int(11) NOT NULL,
  `columns` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `screens`
--

INSERT INTO `screens` (`id`, `name`, `rows`, `columns`) VALUES
(1, 'Sala Melies', 10, 12),
(2, 'Sala Godard', 10, 10),
(3, 'Sala Kurosawa', 12, 16),
(4, 'Sala Spielberg', 16, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `screensformats`
--

CREATE TABLE `screensformats` (
  `id` int(11) NOT NULL,
  `format_id` int(11) NOT NULL,
  `screen_id` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `screensformats`
--

INSERT INTO `screensformats` (`id`, `format_id`, `screen_id`, `price`) VALUES
(1, 1, 1, 500),
(2, 1, 3, 500),
(3, 2, 4, 800),
(4, 2, 2, 800);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `document` int(11) NOT NULL,
  `birthDate` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `avatar_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `avatars`
--
ALTER TABLE `avatars`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `formats`
--
ALTER TABLE `formats`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `image_id` (`image_id`),
  ADD KEY `restriction_id` (`restriction_id`),
  ADD KEY `genre` (`genre_id`) USING BTREE;

--
-- Indices de la tabla `moviescreenings`
--
ALTER TABLE `moviescreenings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie` (`movie_id`),
  ADD KEY `screening` (`screening_id`);

--
-- Indices de la tabla `posters`
--
ALTER TABLE `posters`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prodtypes`
--
ALTER TABLE `prodtypes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type` (`type_id`),
  ADD KEY `image` (`image_id`);

--
-- Indices de la tabla `restrictions`
--
ALTER TABLE `restrictions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `screenings`
--
ALTER TABLE `screenings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `screen` (`screen_id`),
  ADD KEY `language` (`language_id`),
  ADD KEY `language_id` (`language_id`);

--
-- Indices de la tabla `screens`
--
ALTER TABLE `screens`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `screensformats`
--
ALTER TABLE `screensformats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `format` (`format_id`),
  ADD KEY `screen` (`screen_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `avatar` (`avatar_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `avatars`
--
ALTER TABLE `avatars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `formats`
--
ALTER TABLE `formats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `moviescreenings`
--
ALTER TABLE `moviescreenings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `posters`
--
ALTER TABLE `posters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `prodtypes`
--
ALTER TABLE `prodtypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `restrictions`
--
ALTER TABLE `restrictions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `screenings`
--
ALTER TABLE `screenings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `screens`
--
ALTER TABLE `screens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `screensformats`
--
ALTER TABLE `screensformats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `movies_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `movies_ibfk_3` FOREIGN KEY (`image_id`) REFERENCES `posters` (`id`),
  ADD CONSTRAINT `movies_ibfk_4` FOREIGN KEY (`restriction_id`) REFERENCES `restrictions` (`id`);

--
-- Filtros para la tabla `moviescreenings`
--
ALTER TABLE `moviescreenings`
  ADD CONSTRAINT `moviescreenings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  ADD CONSTRAINT `moviescreenings_ibfk_2` FOREIGN KEY (`screening_id`) REFERENCES `screenings` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `prodtypes` (`id`);

--
-- Filtros para la tabla `screenings`
--
ALTER TABLE `screenings`
  ADD CONSTRAINT `screenings_ibfk_1` FOREIGN KEY (`screen_id`) REFERENCES `screens` (`id`),
  ADD CONSTRAINT `screenings_ibfk_2` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`);

--
-- Filtros para la tabla `screensformats`
--
ALTER TABLE `screensformats`
  ADD CONSTRAINT `screensformats_ibfk_1` FOREIGN KEY (`format_id`) REFERENCES `formats` (`id`),
  ADD CONSTRAINT `screensformats_ibfk_2` FOREIGN KEY (`screen_id`) REFERENCES `screens` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`avatar_id`) REFERENCES `avatars` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
