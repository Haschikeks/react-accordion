import { useContext, useEffect, useRef } from 'react';
import { State } from 'react-transition-state';
import { AccordionContext } from '../utils/constants';

const useAccordionItem = <K extends Element>({
  itemKey,
  initialEntered: itemInitialEntered
}: { itemKey?: string | number; initialEntered?: boolean } = {}) => {
  const itemRef = useRef<K>(null);
  const { stateMap, setItem, deleteItem, mountOnEnter, initialEntered, ...rest } =
    useContext(AccordionContext);
  if (process.env.NODE_ENV !== 'production' && !stateMap) {
    throw new Error(
      `[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.`
    );
  }

  useEffect(() => {
    const key = itemKey ?? itemRef.current!;
    setItem!(key, { initialEntered: itemInitialEntered });
    return () => void deleteItem!(key);
  }, [setItem, deleteItem, itemKey, itemInitialEntered]);

  const _initialEntered = itemInitialEntered ?? initialEntered;
  const initialState: State = {
    state: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
    isMounted: !mountOnEnter,
    isEnter: !!_initialEntered
  };

  return {
    itemRef,
    state: stateMap!.get(itemKey ?? itemRef.current!) || initialState,
    ...(rest as Required<typeof rest>)
  };
};

export { useAccordionItem };
