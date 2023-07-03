import cn from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

export type TOption = {
  label: string;
  value: string | number;
};

type Props = {
  options: TOption[];
  value?: string | number;
  allowBlank?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  optionsClass?: string;
  onChange?: (value: string | number) => void;
  defaultValue?: string | number;
};

function SelectBox({
  options,
  allowBlank,
  children,
  disabled = false,
  optionsClass = '',
  onChange,
  defaultValue,
}: Props) {
  const [selected, setSelected] = useState<TOption>(
    options.find((option) => option.value === defaultValue) || {
      label: allowBlank ? '' : '-- Please Select --',
      value: '',
    }
  );
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleExpanded = useCallback(() => {
    if (disabled) return;
    setExpanded((state) => !state);
  }, [disabled]);

  const handleItemOnClick = useCallback(
    (option: TOption) => {
      setSelected(option);
      onChange && onChange(option.value);
    },
    [onChange]
  );

  const handleCollapse = useCallback(() => {
    setExpanded(false);
  }, []);

  return (
    <div
      onClick={handleExpanded}
      className={cn(
        'relative w-full h-10 px-4 flex items-center selectBox cursor-pointer',
        'border-[2px] border-solid border-[#171717]/20 rounded-xl hover:border-[#171717]/30',
        'transition-all ease-in-out duration-300',
        {
          'cursor-not-allowed text-[#171717]/90 bg-[#171717]/10 border-[#171717]/10':
            disabled,
          'border-[#171717]/50 hover:border-[#171717]/50': expanded,
        }
      )}
      tabIndex={0}
      onBlur={handleCollapse}
    >
      <div className="mr-6 text-[#171717]/90 text-[16px] leading-[22px]">
        {selected ? selected.label : children}
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        {/* <HalfArrowDownIcon
                    className={cn("w-[18px] h-[18px] transition-transform duration-300", {
                        "rotate-180 ": expanded,
                        "opacity-50": disabled,
                    })}
                /> */}
      </div>
      <div
        className={cn(
          'absolute z-10 mt-2 left-0 right-0 top-full bg-white rounded-md drop-shadow-[0px_4px_20px_rgba(0,0,0,0.08)]',
          'overflow-hidden transition-all duration-300 ease-in',
          expanded ? 'max-h-[430px]' : 'max-h-0 h-0',
          optionsClass
        )}
      >
        {options?.map((option, index) => (
          <div
            onClick={() => {
              handleItemOnClick(option);
            }}
            key={index}
            className="px-4 py-[10px] hover:bg-[#171717]/[.07] text-[14px] leading-5"
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectBox;
