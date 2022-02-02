import {ChildAsFC} from './Child';
export const Parent = ():JSX.Element => <div><ChildAsFC color='blue' onClick={()=>console.log('hi')}></ChildAsFC></div>