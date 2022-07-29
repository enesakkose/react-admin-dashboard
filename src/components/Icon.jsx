
import SVG from "react-inlinesvg";

export default function Icon({ name, size = 16, ...props }) {
	return (
		<SVG
			src={`../icons/${name}.svg`}
			width={size}
			height={size}
			{...props}
		/>
	)
}