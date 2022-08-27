import s from './Button.module.css'

type propsType={
    name:string
    onClick?:()=>void
}

export const ButtonX = (props:propsType)=> {
    return <div className={s.container}>
        <div>
            <button onClick={props.onClick} className={s.shrinkBorder}>{props.name}</button>
        </div>
    </div>
}