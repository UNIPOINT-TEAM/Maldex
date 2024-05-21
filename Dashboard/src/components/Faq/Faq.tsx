import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import accordionIcon from '../../assets/icons/accordion-icon.png';
import { IoMdAdd } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import {
  GetFaqHome,
  PostFaqHome,
  delFaqHome,
  editFaqHome,
} from '../../services/main';

type FaqItem = {
  id: number;
  title: string;
  body: string;
};

const Faq = () => {
  const [faq, setFaq] = useState<FaqItem[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newFaq, setNewFaq] = useState({ title: '', body: '' });

  useEffect(() => {
    loadFaqs();
  }, []);

  const loadFaqs = async () => {
    try {
      const res = await GetFaqHome();
      setFaq(res);
    } catch (error) {
      console.error('Error fetching FAQ data:', error);
    }
  };

  const toggleFaq = (id: number) => setOpen(open === id ? null : id);

  const handleDelete = async (id: number) => {
    try {
      await delFaqHome(id);
      setFaq(faq.filter((f) => f.id !== id));
    } catch (error) {
      console.error('Error deleting FAQ item:', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await PostFaqHome({
        ...newFaq,
        type: 'home',
        order: faq.length + 1,
      });
      setFaq([...faq, response]);
      setIsAdding(false);
      setNewFaq({ title: '', body: '' });
    } catch (error) {
      console.error('Error adding FAQ item:', error);
    }
  };

  const handleEdit = async (id: number, title: string, body: string) => {
    try {
      const response = await editFaqHome(id, { title, body });
      setFaq(faq.map((f) => (f.id === id ? response : f)));
    } catch (error) {
      console.error('Error updating FAQ item:', error);
    }
  };

  //@ts-ignore
  const EditableAccordionHeader = ({ item }) => (
    <AccordionHeader className=" p-4" onClick={() => toggleFaq(item.id)}>
      <div className="w-full flex justify-between items-center">
        <div>
          <h3>{item.title}</h3>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-warning rounded w-[30px] h-[30px] flex justify-center items-center"
            onClick={(e) => {
              e.stopPropagation();
              const newTitle = prompt('Enter new title:', item.title);
              const newBody = prompt('Enter new body:', item.body);
              if (newTitle && newBody) handleEdit(item.id, newTitle, newBody);
            }}
          >
            <MdEdit color={'white'} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(item.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </AccordionHeader>
  );

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      {faq.map((item) => (
        <Accordion
          key={item.id}
          open={open === item.id}
          icon={<img src={accordionIcon} alt="Expand/Collapse" />}
        >
          <EditableAccordionHeader item={item} />
          <AccordionBody>{item.body}</AccordionBody>
        </Accordion>
      ))}
      {isAdding ? (
        <div className="border border-dashed py-5 px-2 w-full rounded-xl">
          <input
            type="text"
            placeholder="заголовок"
            className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
            value={newFaq.title}
            onChange={(e) => setNewFaq({ ...newFaq, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="описание"
            className="w-full border outline-none rounded h-[40px] mb-3 px-3 py-1"
            value={newFaq.body}
            onChange={(e) => setNewFaq({ ...newFaq, body: e.target.value })}
          />
          <div className="flex justify-center items-start gap-3">
            <button
              onClick={() => setIsAdding(false)}
              className="bg-red-400 text-white w-[200px] h-[40px] rounded"
            >
              отмена
            </button>
            <button
              onClick={handleAdd}
              className="bg-blue-400 text-white w-[200px] h-[40px] rounded"
            >
              сохранять
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center mt-3">
          <button
            className="border border-dashed w-[60px] h-[60px] rounded-[30px] flex justify-center items-center"
            onClick={() => setIsAdding(true)}
          >
            <IoMdAdd size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Faq;
