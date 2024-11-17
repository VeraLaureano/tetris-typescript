# Tetris en TypeScript (Programación Orientada a Objetos)

Este es un juego de **Tetris** implementado en **TypeScript** utilizando **programación orientada a objetos**. El proyecto utiliza un enfoque modular, con clases para gestionar el tablero, las piezas, los controles del juego, y la lógica principal del juego.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)

## Descripción

Este proyecto implementa el clásico juego **Tetris**, donde el jugador controla piezas que caen y deben ser alineadas para completar filas en un tablero. Las piezas tienen diferentes formas y rotaciones, y el jugador puede moverlas a la izquierda, derecha, o hacia abajo para que encajen mejor en el tablero. El objetivo del juego es evitar que las piezas se acumulen hasta la parte superior del tablero.

El juego está desarrollado usando **TypeScript**, con un diseño basado en **programación orientada a objetos** (POO), dividiendo el juego en clases que representan diferentes componentes del juego como:

- **Tablero**: Representa el área de juego donde las piezas caen.
- **Pieza**: Representa las piezas que caen, con sus formas, colores y rotaciones.
- **Controles**: Gestiona las entradas del usuario para mover y rotar las piezas.
- **Juego**: Controla la lógica principal del juego, el ciclo de actualización y el manejo de colisiones.

## Tecnologías

- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript.
- **Canvas API**: Para renderizar el juego en el navegador.
- **HTML5**: Para crear la estructura básica del juego.

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone git@github.com:VeraLaureano/tetris-typescript.git
   ```

2. **Instalar dependencias**

   Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Luego, ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   npm install
   ```

3. **Compilar el código TypeScript**

   Para compilar el código de TypeScript a JavaScript, ejecuta:

   ```bash
   npm run build
   ```

4. **Ejecutar el juego**

   Abre el archivo `index.html` en tu navegador para jugar el juego.

## Uso

- **Teclas de movimiento**:
  - **Flecha izquierda**: Mueve la pieza a la izquierda.
  - **Flecha derecha**: Mueve la pieza a la derecha.
  - **Flecha abajo**: Acelera el descenso de la pieza.
  - **Espacio**: Rota la pieza.

- El objetivo del juego es **completar filas** de bloques sin dejar huecos. Cada vez que completas una fila, ésta se elimina y el jugador obtiene puntos.

- El juego termina cuando las nuevas piezas no pueden colocarse debido a que el tablero está lleno.

## Estructura del Proyecto

El proyecto está organizado en las siguientes carpetas y archivos:

```
/tetris-typescript
|-- /src
|   |-- Board.ts         # Clase que gestiona el tablero
|   |-- Piece.ts         # Clase que gestiona las piezas
|   |-- Controls.ts      # Clase que gestiona los controles del juego
|   |-- Game.ts          # Clase principal que gestiona la lógica del juego
|-- /dist                # Carpeta donde se genera el código compilado (JavaScript)
|-- index.html           # Archivo HTML que carga el juego
|-- /styles              # Carpeta que contiene los estilos CSS
|   |-- main.css         # Estilos generales del juego
|-- tsconfig.json        # Configuración de TypeScript
|-- package.json         # Configuración del proyecto y dependencias
|-- README.md            # Este archivo
```

### Descripción de Clases

- **Board**: Esta clase maneja la representación del tablero de juego, la verificación de colisiones y la eliminación de filas completas.
  
- **Piece**: Representa las piezas del juego, gestionando su forma, rotación y posición.

- **Controls**: Administra las entradas del teclado para mover y rotar las piezas.

- **Game**: Controla el flujo principal del juego, incluyendo la actualización del estado, la generación de nuevas piezas y la detección de colisiones.

## Contribuir

Si deseas contribuir a este proyecto, siéntete libre de abrir un *issue* o un *pull request*. Aquí hay algunos pasos que puedes seguir:

1. Haz un *fork* del repositorio.
2. Crea una rama con tu cambio: `git checkout -b feature/nueva-funcionalidad`
3. Haz commit de tus cambios: `git commit -m 'Agregada nueva funcionalidad'`
4. Empuja tus cambios a tu repositorio: `git push origin feature/nueva-funcionalidad`
5. Crea un *pull request*.
