import Canvas from './modules/draws';
import apear from './modules/delay';

const canvasBoard = new Canvas(
    document.querySelector('.board'),
    window.document.body.clientWidth,
);
canvasBoard.setCtx('2d');
canvasBoard.drawSquares2d();

const canvasFBoard = new Canvas(
    document.querySelector('.board-footer'),
    window.document.body.clientWidth,
);
canvasFBoard.setCtx('2d');
canvasFBoard.drawSquares2d();

function reloadPage() {
    window.location.reload();
}

window.addEventListener('orientationchange', reloadPage, false);

apear(['#wow', '#whv']);
