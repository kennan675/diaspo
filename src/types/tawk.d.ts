export {};

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      minimize?: () => void;
      [key: string]: unknown;
    };
  }
}
