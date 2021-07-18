import styles from './style.module.css';

type NavItemProps = {
  color: string;
  text: string;
};
type colorToApply = {
  [key: string]: string;
};
export const NavItem = ({ color, text }: NavItemProps) => {
  const checkColor = (colorChoosen: string): string => {
    // NOTE Object Literals
    const Colors: colorToApply = {
      primary: styles.itemPrimary,
      secondary: styles.itemSecondary,
      tertiary: styles.itemTertiary,
    } || styles.itemPrimary;

    return Colors[colorChoosen];
  };

  return <li className={checkColor(color)}>{text}</li>;
};
