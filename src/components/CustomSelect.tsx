import React, { FC } from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

interface CustomSelectProps {
  onSelectChange: (value: string) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({ onSelectChange }) => {
  const handleSelectChange = (value: string) => {
    onSelectChange(value);
  };

  return (
    <Select.Root
      defaultValue="default" // Defina um valor padrão para evitar uma opção inicial "vazia"
      onValueChange={handleSelectChange}
    >
      <Select.Trigger
        className="flex-1 inline-flex items-center justify-center rounded px-[15px] text-lg leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
      >
        <Select.Value placeholder="Select a input" />
        <Select.Icon className="text-violet11">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-[5px]">
            <Select.Item
              className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              value='cnpj'
            >
              <Select.ItemText>CNPJ</Select.ItemText>
              <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
            
            <Select.Item
              className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              value='pedido'
            >
              <Select.ItemText>Pedido</Select.ItemText>
              <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default CustomSelect;
