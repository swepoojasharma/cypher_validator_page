import { cva, cx } from 'class-variance-authority';

const button = cva('', {
    variants: {
        variant: {
            primary: [
                'bg-purple-100',
                'hover:border-none',
                'text-txtElement-white',
                'hover:bg-purple-300',
                'active:bg-purple-300',
                'rounded-lg',
                'p-5',
                'text-label-14px-bold',
                'h-12',
                'disabled:bg-txtElement-disabled',
            ],
            secondary: [
                'bg-surface-0',
                'border border-outline-medium',
                'hover:border-transparent',
                'text-txtElement-high',
                'hover:bg-surface-1',
                'active:bg-surface-3',
                'rounded-lg',
                'p-5',
                'text-label-14px-bold',
                'h-12',
                'disabled:bg-surface-1',
                'disabled:text-txtElement-disabled',
            ],
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

export default function Button({
    type,
    className,
    variant = 'primary',
    disabled = false,
    children,
    loading = false,
    loadingLabel,
    fullWidth = false,
    onClick,
    ...props
}) {
    const classNames = button({
        variant,
        className: cx('flex items-center justify-center', fullWidth && 'w-full', loading && 'cursor-default', className),
    });
    return (
        <button type={type} className={classNames} disabled={disabled} onClick={!loading ? onClick : () => {}} {...props}>
            <div className="flex items-center gap-[6px]">
                <span>{loading ? loadingLabel || 'Loading' : children}</span>
            </div>
        </button>
    );
}
