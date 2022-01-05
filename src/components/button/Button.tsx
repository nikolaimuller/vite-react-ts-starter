import { forwardRef } from 'react'
import cx from 'classnames'

export enum ButtonType {
  submit = 'submit',
  reset = 'reset',
  button = 'button',
}

export type ButtonProps = {
  id?: string
  type?: ButtonType
  disabled?: boolean
  loading?: boolean
  onFocus?: React.FocusEventHandler<HTMLButtonElement>
  onBlur?: React.FocusEventHandler<HTMLButtonElement>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /**
   * The children prop used as button label.
   */
  children?: string
}

export const ButtonSpinner = (): React.ReactElement => (
  <div data-testid="button-spinner">
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-20" cx={12} cy={12} r={10} strokeWidth={4} stroke="currentColor" />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </div>
)

ButtonSpinner.displayName = 'ButtonSpinner'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const { id, type, disabled, loading, onFocus, onBlur, onClick, children } = props

  const ariaProps = loading ? { 'aria-label': ['loading', String(children)].join(' ') } : {}

  return (
    <button
      ref={forwardedRef}
      id={id}
      type={type}
      disabled={disabled}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={(e) => !loading && onClick && onClick(e)}
      className={cx(
        'inline-flex items-center justify-center min-w-[5rem] min-h-[2.5rem] rounded-xl bg-blue-600 text-white outline-none select-none transition-colors disabled:bg-gray-200 hover:bg-blue-500 focus-visible:ring-2 ring-offset-2 ring-blue-600',
        (loading || disabled) && 'pointer-events-none',
      )}
      {...ariaProps}
    >
      <div className={cx('contents', loading && 'invisible')}>
        <div className="px-4 text-sm">{children}</div>
      </div>

      {loading && (
        <div className="absolute top-1/2 left-1/2 -ml-2.5 -mt-2.5 animate-spin">
          <ButtonSpinner />
        </div>
      )}
    </button>
  )
})

Button.defaultProps = {
  type: ButtonType.button,
}

Button.displayName = 'Button'
