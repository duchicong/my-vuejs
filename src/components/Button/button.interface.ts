export interface IButtonProps {
  size?: 'large' | 'medium' | 'small';
  color?: 'danger' | 'warning' | 'success' | 'info' | 'link' | 'text' | string;
  loading?: boolean;
  border?: boolean;
  suffixIcon?: any;
  prefixIcon?: any;
}