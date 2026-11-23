import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'flex-row items-center justify-center rounded-xl font-semibold active:opacity-80';

  const sizeClasses = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3.5 px-5 text-base',
    lg: 'py-4 px-6 text-lg',
  }[size];

  const variantClasses = {
    primary: 'bg-blue-600 border-0',
    secondary: 'bg-slate-900 border-0',
    outline: 'border border-blue-600 bg-transparent',
    ghost: 'bg-transparent border-0',
  }[variant];

  const textColor = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-blue-600',
    ghost: 'text-slate-800',
  }[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${
        disabled ? 'opacity-50' : ''
      } ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#2563EB' : '#FFFFFF'} />
      ) : (
        <Text className={`font-semibold ${textColor}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
