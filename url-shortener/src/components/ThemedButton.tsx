interface ThemedButtonProps {
  text: string
  pill?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const ThemedButton = ({
  text,
  pill,
  disabled,
  className,
  onClick,
}: ThemedButtonProps) => {
  const buttonStyle = {
    color: "white",
    backgroundColor: "var(--color-cyan)",
    fontWeight: "700",
  }
  return (
    <button
      type="button"
      className={`btn themed-button ${
        pill ? "rounded-pill px-4" : "rounded-2 px-2"
      } border-0 ${className}`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  )
}

export default ThemedButton
