interface TabDescriptionProps {
  description: string;
}
const TabDescription: React.FC<TabDescriptionProps> = ({ description }) => {
  return (
    <p className=" font-normal text-fs_7 text-black mt-1">{description}</p>
  );
};

export default TabDescription;
