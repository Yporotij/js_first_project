interface IOptional {
  id?: string;
  className?: string;
  text?: string;
  alt?: string;
  for?: string;
}
interface IInputOptions extends Omit<IOptional, 'for' | 'alt'> {
  placeholder?: string;
  min?: string;
  max?: string;
  step?: string;
  value?: string;
  disabled?: string;
  text?: string;
  pattern?: string;
  checked?: boolean;
}

const applySelector = (element: HTMLElement, options: Pick<IOptional, 'className' | 'id'>): void => {
  if (options.className) {
    element.className = options.className;
  }
  if (options.id) {
    element.setAttribute('id', options.id);
  }
};
const createButton = (options: Pick<IOptional, 'className' | 'id' | 'text'>): HTMLButtonElement => {
  const buttonTag = document.createElement('button');
  applySelector(buttonTag, { className: options.className, id: options.id });
  if (options.text) {
    buttonTag.innerHTML = options.text;
  }
  return buttonTag;
};