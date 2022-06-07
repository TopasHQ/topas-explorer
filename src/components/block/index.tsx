import Backdrop from 'components/ui/Backdrop';
import Button from 'components/ui/Button';
import Content from 'components/ui/Content';
import Loading from 'components/ui/Loading';
import Metadata from 'components/ui/Metadata';
import NotFound from 'components/ui/NotFound';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBlocks } from 'services/api';
import { Block } from 'types';

import BlockData from './BlockData';
import BlockHeader from './BlockHeader';

const BlockPage = (): React.ReactElement => {
  const [block, setBlock] = useState<Block | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const updateBlock = async () => {
      setIsLoading(true);
      try {
        const data = await fetchBlocks({ blockId: id || '' });

        if (data.length) {
          setBlock(data[0]);
        }
      } catch (err) {
        console.error(err);
      }

      setIsLoading(false);
    };

    updateBlock();
  }, [id]);

  return (
    <Content>
      <Metadata title={`Block ${id}`} description={`Block details for ${id}`} />

      {isLoading && <Loading />}

      {!block && !isLoading && <NotFound />}

      {block && !isLoading && (
        <>
          <Backdrop>
            <BlockHeader block={block} />
            <hr className="my-12" />
            <BlockData block={block} />
          </Backdrop>

          <div className="flex justify-center mt-8">
            <Button color="primary" onClick={() => navigate('/blocks')}>
              Back to Overview
            </Button>
          </div>
        </>
      )}
    </Content>
  );
};

export default BlockPage;
