export const SvgIcon = (props: {
    name: string
    alt?: string
    width: string
    height: string
}) => {
    const { name, alt, width, height } = props
    return <img
        src={`${import.meta.env.BASE_URL}${name}.svg`}
        alt={alt}
        width={width}
        height={height}
    />
}