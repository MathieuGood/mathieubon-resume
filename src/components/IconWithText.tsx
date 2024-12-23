const IconWithText: React.FC<{ iconSrc: string; text: string }> = ({ iconSrc, text }) => {
	return (
		<div className="flex items-center text-sm ">
			<div className="w-6 flex-shrink-0 ">
				<img src={iconSrc} className="h-4 w-auto" />
			</div>
			<span className="flex-shrink-1">{text}</span>
		</div>
	)
}

export default IconWithText
