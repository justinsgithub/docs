/**
* think of react hot-toast library
* position prop can be one of 
* 'left-center' | 'left-top' | 'left-bottom' | 'center-top'
* 'right-center' | 'right-top' | 'right-bottom' | 'center-bottom'
*  'center'
*/

type xPosition = 'left' | 'center' | 'right';

type yPosition = 'top' | 'center' | 'bottom';

type TicTacToeProps = {
    position: Exclude<`${xPosition}-${yPosition}` | 'center', 'center-center'> 
}

export const TicTacToe = ({ position }: TicTacToeProps) => {
    return <div>Player chose - {position}</div>
}
