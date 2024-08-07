import { AntDesignOutlined } from "@ant-design/icons"
import { Button, Card ,Typography} from "antd"
import { missionStatement } from "./rawData"


export const StepItemsArray = ()=>{
    const {Paragraph} = Typography
    let stepItemsArray = missionStatement.map(({title,content})=>{
  return {title:title,description:<div style={{minHeight:'30rem'}}><Card>
            <Paragraph>
                {content}
            </Paragraph>



        </Card>
        </div>}
    })

return stepItemsArray
}


/**
 * 
 *  items={[
          {
            title: 'Step 1',
            description,
            subTitle:<Button>hello</Button>
          },
          {
            title: 'Step 2',
            description,
            icon:<AntDesignOutlined></AntDesignOutlined>
          },
          {
            title: 'Step 3',
            description:<div style={{minHeight:'30rem',}}><Card>

<Button>1</Button>
<Button>2</Button>
<Button>3</Button>

            </Card>
            </div>,
          },
          {
            title: 'Step 4',
            description,
          },
        ]}
 */
