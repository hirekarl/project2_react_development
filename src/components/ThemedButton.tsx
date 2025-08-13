interface ThemedButtonProps {
  text: string
  backgroundColor?: string
  pill?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const ThemedButton = ({
  text,
  backgroundColor = "var(--color-cyan)",
  pill,
  disabled,
  className,
  onClick,
}: ThemedButtonProps) => {
  const buttonStyle = {
    color: "white",
    backgroundColor: backgroundColor,
    fontWeight: 700,
  }
  return (
    <button
      type="button"
      style={buttonStyle}
      className={`btn themed-button ${
        pill ? "rounded-pill px-4" : "rounded-2 px-2"
      } border-0 ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  )
}

export default ThemedButton
