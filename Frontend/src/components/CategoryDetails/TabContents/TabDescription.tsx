interface TabDescriptionProps {
  description: string;
}
const TabDescription: React.FC<TabDescriptionProps> = ({ description }) => {
  return (
    <p className="hover-position font-normal text-fs_7 text-black mt-1 max-h-[450px] ">
      {description}
    </p>
  );
};

export default TabDescription;
