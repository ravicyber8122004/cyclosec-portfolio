export function PrimaryButton(props) {
    return(
        <button className="border border-PrimaryButtonBackground rounded-full px-6 py-2 font-medium bg-PrimaryButtonBackground text-neutral-950 hover:cursor-pointer hover:bg-green-400 transition-all duration-200 hidden md:inline-flex">{props.name}</button>
    )
}

export function SecondaryButton(props){
    return(
        <button className="border border-white rounded-full px-6 py-2 text-white bg-transparen font-medium hover:cursor-pointer hover:bg-PrimaryButtonBackground hover:border-none hover:text-neutral-950 transition-all duration-200 hidden md:inline-flex">{props.name}</button>
    )
}