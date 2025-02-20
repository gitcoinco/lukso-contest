interface ProfileIconProps {
  imageUrl: string;
}

export function ProfileIcon({ imageUrl }: ProfileIconProps) {
  return (
    <div 
      className="w-6 h-6 aspect-square rounded-full border border-[#ECEDED]"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'lightgray',
      }}
    />
  );
} 