// picker.js
import '../../static/picker/picker.css'
import '../../static/picker/picker'
import '../../static/picker/city'

const Picker = window.Picker
const cityData = window.cityData
const openPicker = () => {
  new Picker({
    title: '地区', //标题(可选)
    type: 3, //需要联动级数[1、2、3]（可选）
    data: cityData, //数据(必传) -- demo数据可以根据数据结构循环生成
    keys: {
      id: 'Code',
      value: 'Name',
      childData: 'level', //最多3级联动
    }, //数组内的键名称(必传，id、text、data)
    callBack: function (val) {
      //回调函数（val为选择的值）
      /*
    如果需要除去val之外更多的数据，前往 pciker.js eventClick事件内，根据确定按钮下逻辑添加需要的字段(city.js内必须有此值)，然后添加到回调内
   */
      setPlckerVal(val.split(' '))
    },
  })
}
const PickerBox = () => (
  <div className="pickerBox" key="pickerBox">
    {Array(3)
      .fill(null)
      .map((item, index) => (
        <div
          className="pickerItem"
          onClick={() => openPicker()}
          key={`picker${index}`}
        >
          {plckerVal[index] || '请选择'}
        </div>
      ))}
  </div>
)

return <PickerBox />
