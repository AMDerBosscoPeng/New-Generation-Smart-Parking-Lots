//////////////////////////////////////////////////////////////////////
//填tag>填欄位array>驗證>pushfunction>result add
//////////////////////////////////////////////////////////////////////
//Step1將資料丟到array
var Owner_email=["Submit Owner(e-mail):"];
var AMD_JIRA_Ticket_EXT_No=["AMD JIRA Ticket EXT No :"];
var OEM_NAME=["OEM Name:"];
var ODM_NAME=["ODM Name:"];
var Program_NAME=["Project Name:"];
var General=["General:"];
var Bustype=["Bus type:"];
var GPU=["GPU:"];
var GPU_Device_ID_Revision_ID=["GPU Device ID / Revision ID:"];
var Subsystem_vendor_ID=["Subsystem vendor ID:"];
var Subsystem_device_ID=["Subsystem device ID:"];
var Platform_design=["Platform design:"];
var Performance=["Performance:"];
var Core_clock_source=["Core clock source:"];
var Core_clock_reference_frequency=["Core clock reference frequency:"];
var Engine_clock_Spread_Spectrum_support=["Engine clock Spread Spectrum support :","Default setting"];
var Memory_clock_Spread_Spectrum_support=["Memory clock Spread Spectrum support :","Default setting"];
var GPU_clock_Spread_Spectrum_support=["GPU clock Spread Spectrum support :","Default setting"];
var Voltage_Phase_controls=["SVI2 Voltage / Phase controls:"];
var VR_SVI2_P_N=["VR SVI2 P/N:"];
var Domain_type=["Domain type:"];
var Voltagetype=["Voltage type:"];
var Boot_up_voltage_in_mV=["Boot-up voltage in mV:"];
var Gain_value=["Gain value:"];
var Merge_power_Yes_No=["Merge power Yes/No:"];
var MergedVoltagetype=["Merge Volatge type:"];
var Memory=["Memory:"];
var Memory_type=["Memory type:"];
var Memory_module_selection=["Memory module selection:"];
var Memory_module_detection_GPIO_pin_assignment=["Memory module detection GPIO pin assignment:"];
var Memory_module_information_block=["Memory module information block:"];
var Memory_module_ID=["Memory module ID:"];
var Module_vendor=["Memory Module vendor:"];
var Module_vendor_P_N=["Memory Module vendor P/N:"];
var Memory_Voltage_V=["Memory Voltage(V):"];
var Module_density=["Memory Module density:"];
var Module_channel_size=["Memory Module channel size:"];
var Number_of_channels=["Number of channels:"];
var Memory_Data_width=["Memory Data width:"];
var Rank=["Rank:"];
var Connectors=["Connectors:"];
var Connector_Type=["Connector Type:"];
var Source_Type=["Source Type:"];
var I2C_Line=["I2C Line:"];
var HPD_ID=["HPD ID:"];
var PWM_working_frequency_HZ=["PWM working frequency (HZ):"];
var MST_and_HBR2=["MST and HBR2 enable:"];
var Feature_and_GPIO_strap_pin_define=["Feature and GPIO strap pin define:"];
var Feature_and_GPIO_pin_table=[" ","GPIO Pin","Active"];
var REG_HOT_AC_BATT=["REG_ HOT_ AC_ BATT:"];
var VDDC_VRHOT_GPIO_Pin=["VDDC VRHOT:"];
var PEAK_CURRENT_CONTROL_PCC_SUPPORT=["Peak Current Control (PCC):"];
var DRAM_self_refresh_GPIO=["DRAM self-refresh GPIO:"];
var Stereo_3D=["Stereo 3D:"];

//var Memory_clock_Spread_Spectrum_percentage=["Memory clock Spread Spectrum percentage*0.01%:"];
/////////////////////////////////////////////////////////////////////
//將result Container html 儲存起來
var HTML_database_array=[];
//var Database_var_array=["Owner_email","AMD_JIRA_Ticket_EXT_No","OEM_NAME","ODM_NAME","Program_NAME","Bustype","GPU","GPU_Device_ID_Revision_ID","Subsystem_vendor_ID","Subsystem_device_ID","Platform_design","Core_clock_source","Core_clock_reference_frequency","Memory_type"];
var Owner_email_database_id=["Submit Owner(e-mail)database id:","Owner_email"];
var AMD_JIRA_Ticket_EXT_No_database_id=["AMD JIRA Ticket EXT No database id:","AMD_JIRA_Ticket_EXT_No"];
var OEM_NAME_database_id=["OEM Namedatabase id:","OEM_NAME"];
var ODM_NAME_database_id=["ODM Namedatabase id:","ODM_NAME"];
var Program_NAME_database_id=["Project Namedatabase id:","Program_NAME"];
var General_database_id=["Generaldatabase id:"];
var Bustype_database_id=["Bus typedatabase id:","Bustype"];
var GPU_database_id=["GPUdatabase id:","GPU"];
var GPU_Device_ID_Revision_ID_database_id=["GPU Device ID / Revision IDdatabase id:","GPU_Device_ID_Revision_ID"];
var Subsystem_vendor_ID_database_id=["Subsystem vendor IDdatabase id:","Subsystem_vendor_ID"];
var Subsystem_device_ID_database_id=["Subsystem device IDdatabase id:","Subsystem_device_ID"];
var Platform_design_database_id=["Platform designdatabase id:","Platform_design"];
var Performance_database_id=["Performancedatabase id:"];
var Core_clock_source_database_id=["Core clock sourcedatabase id:","Core_clock_source"];
var Core_clock_reference_frequency_database_id=["Core clock reference frequencydatabase id:","Core_clock_reference_frequency"];
var Engine_clock_Spread_Spectrum_support_database_id=["Engine clock Spread Spectrum support database id:","Default setting"];
var Memory_clock_Spread_Spectrum_support_database_id=["Memory clock Spread Spectrum support database id:","Default setting"];
var GPU_clock_Spread_Spectrum_support_database_id=["GPU clock Spread Spectrum support database id:","Default setting"];
var Voltage_Phase_controls_database_id=["SVI2 Voltage / Phase controlsdatabase id:"];
var VR_SVI2_P_N_database_id=["VR SVI2 P/Ndatabase id:"];
var Domain_type_database_id=["Domain typedatabase id:"];
var Voltagetype_database_id=["Voltage typedatabase id:"];
var Boot_up_voltage_in_mV_database_id=["Boot-up voltage in mVdatabase id:"];
var Gain_value_database_id=["Gain valuedatabase id:"];
var Merge_power_Yes_No_database_id=["Merge power Yes/Nodatabase id:"];
var MergedVoltagetype_database_id=["Merge Volatge typedatabase id:"];
var Memory_database_id=["Memorydatabase id:"];
var Memory_type_database_id=["Memory typedatabase id:","Memory_type"];
var Memory_module_selection_database_id=["Memory module selectiondatabase id:"];
var Memory_module_detection_GPIO_pin_assignment_database_id=["Memory module detection GPIO pin assignmentdatabase id:"];
var Memory_module_information_block_database_id=["Memory module information blockdatabase id:"];
var Memory_module_ID_database_id=["Memory module IDdatabase id:"];
var Module_vendor_database_id=["Memory Module vendordatabase id:"];
var Module_vendor_P_N_database_id=["Memory Module vendor P/Ndatabase id:"];
var Memory_Voltage_V_database_id=["Memory Voltage(V)database id:"];
var Module_density_database_id=["Memory Module densitydatabase id:"];
var Module_channel_size_database_id=["Memory Module channel sizedatabase id:"];
var Number_of_channels_database_id=["Number of channelsdatabase id:"];
var Memory_Data_width_database_id=["Memory Data widthdatabase id:"];
var Rank_database_id=["Rankdatabase id:"];
var Connectors_database_id=["Connectorsdatabase id:"];
var Connector_Type_database_id=["Connector Typedatabase id:"];
var Source_Type_database_id=["Source Typedatabase id:"];
var I2C_Line_database_id=["I2C Linedatabase id:"];
var HPD_ID_database_id=["HPD IDdatabase id:"];
var PWM_working_frequency_HZ_database_id=["PWM working frequency (HZ)database id:"];
var MST_and_HBR2_database_id=["MST and HBR2 enabledatabase id:"];
var Feature_and_GPIO_strap_pin_define_database_id=["Feature and GPIO strap pin definedatabase id:"];
var Feature_and_GPIO_pin_table_database_id=[" ","GPIO Pin","Active"];
var REG_HOT_AC_BATT_database_id=["REG_ HOT_ AC_ BATTdatabase id:","Select_REG_HOT_AC_BATT_0","Active_HI_LOW_Select_REG_HOT_AC_BATT_0"];
var VDDC_VRHOT_GPIO_Pin_database_id=["VDDC VRHOTdatabase id:","Select_VDDC_VRHOT_GPIO_Pin_0","Active_HI_LOW_Select_VDDC_VRHOT_GPIO_Pin_0"];
var PEAK_CURRENT_CONTROL_PCC_SUPPORT_database_id=["Peak Current Control (PCC)database id:","Select_PEAK_CURRENT_CONTROL_PCC_SUPPORT_0","Active_HI_LOW_Select_PEAK_CURRENT_CONTROL_PCC_SUPPORT_0"];
var DRAM_self_refresh_GPIO_database_id=["DRAM self-refresh GPIOdatabase id:","Select_DRAM_self_refresh_GPIO_0","Active_HI_LOW_Select_DRAM_self_refresh_GPIO_0"];
var Stereo_3D_database_id=["Stereo 3Ddatabase id:","Select_Stereo_3D_0","Active_HI_LOW_Select_Stereo_3D_0"];
var Database_id_value_String='<script id="save_html_node">';
//-------------------------------------------------------------------
//驗證資料用function
/*

*/

//驗證TextView
function checkTextview(control) {
  if (control.value == "") {
    validatePrompt(control, "請輸入資料");
    return (false);
  }
  return (true);
}



//驗證下拉選單
function checkSelect(control) {
  for (i=1; i<control.length; i++){
    if (control[i].selected){

      return(true);
    }
  }
    
  alert ("select請擇一！");
  return (false);
}
 
/*
按下送出紐呼叫此function validateForm(form)
*/
function validateForm(form) {

 /*Step2
  if的順序與表單的驗證順序有關,
  checkTextview(form.###這裡填寫HTML tag的Name )
  if必須全部驗證通過, 才能執行後面的
目前使用required驗證
  if (!checkTextview(form.ODM_NAME)) return;
  if (!checkTextview(form.OEM_NAME)) return;
  if (!checkTextview(form.Program_NAME)) return;
  if (!checkSelect(form.Bustype)) return;
  if (!checkSelect(form.Controllertype)) return;
  if (!checkTextview(form.Subsystem_vendor_ID)) return;
  if (!checkTextview(form.Subsystem_device_ID)) return;
  if (!checkSelect(form.Revision_ID)) return;
  if (!checkSelect(form.Is_mobile_design)) return;
  if (!checkTextview(form.Boot_up_Engine_clock_frequency))return;
  if (!checkSelect(form.Core_clock_source)) return;
  if (!checkSelect(form.Core_clock_reference_frequency)) return;
  if (!checkTextview(form.Boot_up_Memory_clock_frequency)) return;
  if (!checkSelect(form.Memory_clock_source)) return;
  if (!checkSelect(form.Memory_clock_reference_frequency))return;


  if (!checkRadio(form.radioname)) return;
  if (!checkSelect(form.selectname1)) return;
  if (!checkNselect(form.member1)) return;*/
  //if (!checkTextarea(form.textareaname)) return;

  /*Step3
  資料欄位初始化
*/
  Owner_email.length=1;
  AMD_JIRA_Ticket_EXT_No.length=1;
  OEM_NAME.length=1;
  ODM_NAME.length=1;
  Program_NAME.length=1;
  Bustype.length=1;
  GPU.length=1;
  GPU_Device_ID_Revision_ID.length=1;
  Subsystem_vendor_ID.length=1;
  Subsystem_device_ID.length=1;
  Platform_design.length=1;
  Core_clock_source.length=1;
  Core_clock_reference_frequency.length=1;
  Engine_clock_Spread_Spectrum_support.length=2;
  Memory_clock_Spread_Spectrum_support.length=2;
  GPU_clock_Spread_Spectrum_support.length=2;
  VR_SVI2_P_N.length=1;
  Domain_type.length=1;
  Voltagetype.length=1;
  Boot_up_voltage_in_mV.length=1;
  Gain_value.length=1;
  Merge_power_Yes_No.length=1;
  MergedVoltagetype.length=1;
  Memory_type.length=1;
  Memory_module_selection.length=1;
  Memory_module_detection_GPIO_pin_assignment.length=1;
  Memory_module_ID.length=1;
  Module_vendor.length=1;
  Module_vendor_P_N.length=1;
  Memory_Voltage_V.length=1;
  Module_density.length=1;
  Module_channel_size.length=1;
  Number_of_channels.length=1;
  Memory_Data_width.length=1;
  Rank.length=1;
  Connector_Type.length=1;
  Source_Type.length=1;
  I2C_Line.length=1;
  HPD_ID.length=1;
  PWM_working_frequency_HZ.length=1;
  MST_and_HBR2.length=1;
 REG_HOT_AC_BATT.length=1;
 VDDC_VRHOT_GPIO_Pin.length=1;
 PEAK_CURRENT_CONTROL_PCC_SUPPORT.length=1;
 DRAM_self_refresh_GPIO.length=1;
 Stereo_3D.length=1;
 //------
  HTML_database_array=[];
  //Database_var_array.length=14;
  Owner_email_database_id.length=2;
  AMD_JIRA_Ticket_EXT_No_database_id.length=2;
  OEM_NAME_database_id.length=2;
  ODM_NAME_database_id.length=2;
  Program_NAME_database_id.length=2;
  Bustype_database_id.length=2;
  GPU_database_id.length=2;
  GPU_Device_ID_Revision_ID_database_id.length=2;
  Subsystem_vendor_ID_database_id.length=2;
  Subsystem_device_ID_database_id.length=2;
  Platform_design_database_id.length=2;
  Core_clock_source_database_id.length=2;
  Core_clock_reference_frequency_database_id.length=2;
  Engine_clock_Spread_Spectrum_support_database_id.length=2;
  Memory_clock_Spread_Spectrum_support_database_id.length=2;
  GPU_clock_Spread_Spectrum_support_database_id.length=2;
  VR_SVI2_P_N_database_id.length=1;
  Domain_type_database_id.length=1;
  Voltagetype_database_id.length=1;
  Boot_up_voltage_in_mV_database_id.length=1;
  Gain_value_database_id.length=1;
  Merge_power_Yes_No_database_id.length=1;
  MergedVoltagetype_database_id.length=1;
  Memory_type_database_id.length=2;
  Memory_module_selection_database_id.length=1;
  Memory_module_detection_GPIO_pin_assignment_database_id.length=1;
  Memory_module_ID_database_id.length=1;
  Module_vendor_database_id.length=1;
  Module_vendor_P_N_database_id.length=1;
  Memory_Voltage_V_database_id.length=1;
  Module_density_database_id.length=1;
  Module_channel_size_database_id.length=1;
  Number_of_channels_database_id.length=1;
  Memory_Data_width_database_id.length=1;
  Rank_database_id.length=1;
  Connector_Type_database_id.length=1;
  Source_Type_database_id.length=1;
  I2C_Line_database_id.length=1;
  HPD_ID_database_id.length=1;
  PWM_working_frequency_HZ_database_id.length=1;
  MST_and_HBR2_database_id.length=1;
 REG_HOT_AC_BATT_database_id.length=3;
 VDDC_VRHOT_GPIO_Pin_database_id.length=3;
 PEAK_CURRENT_CONTROL_PCC_SUPPORT_database_id.length=3;
 DRAM_self_refresh_GPIO_database_id.length=3;
 Stereo_3D_database_id.length=3;
 Database_id_value_String='<script id="save_html_node">';
 //------ 
  //Memory_clock_Spread_Spectrum_percentage.length=1;
  /***************************************************************************/
  //Step4存入資料
  //將TextView的值存入欄位
  pushTextViewValue(Owner_email,form.Owner_email);
  Database_id_value_String=Database_id_value_String+'document.getElementById("Owner_email").value="'+document.getElementById("Owner_email").value+'";';
  pushTextViewValue(AMD_JIRA_Ticket_EXT_No,form.AMD_JIRA_Ticket_EXT_No);
  Database_id_value_String=Database_id_value_String+'document.getElementById("AMD_JIRA_Ticket_EXT_No").value="'+document.getElementById("AMD_JIRA_Ticket_EXT_No").value+'";';
  pushTextViewValue(ODM_NAME,form.ODM_NAME);
  Database_id_value_String=Database_id_value_String+'document.getElementById("ODM_NAME").value="'+document.getElementById("ODM_NAME").value+'";';
  pushTextViewValue(OEM_NAME,form.OEM_NAME);
  Database_id_value_String=Database_id_value_String+'document.getElementById("OEM_NAME").value="'+document.getElementById("OEM_NAME").value+'";';
  pushTextViewValue(Program_NAME,form.Program_NAME);
  Database_id_value_String=Database_id_value_String+'document.getElementById("Program_NAME").value="'+document.getElementById("Program_NAME").value+'";';
  pushTextViewValue(Subsystem_vendor_ID,form.Subsystem_vendor_ID);
  Database_id_value_String=Database_id_value_String+'document.getElementById("Subsystem_vendor_ID").value="'+document.getElementById("Subsystem_vendor_ID").value+'";';
  pushTextViewValue(Subsystem_device_ID,form.Subsystem_device_ID);
  Database_id_value_String=Database_id_value_String+'document.getElementById("Subsystem_device_ID").value="'+document.getElementById("Subsystem_device_ID").value+'";';
  
  //pushTextViewValue(Memory_clock_Spread_Spectrum_percentage,form.Memory_clock_Spread_Spectrum_percentage);
  //將下拉選單中被選中的資料存入欄位
   pushSelectValue(Bustype,form.Bustype);
   Database_id_value_String=Database_id_value_String+'document.getElementById("Bustype").value="'+document.getElementById("Bustype").value+'";';
   pushTextViewValue(GPU,form.GPU);
   Database_id_value_String=Database_id_value_String+'document.getElementById("GPU").value="'+document.getElementById("GPU").value+'";';   
   pushTextViewValue(GPU_Device_ID_Revision_ID,form.GPU_Device_ID_Revision_ID);
   Database_id_value_String=Database_id_value_String+'document.getElementById("GPU_Device_ID_Revision_ID").value="'+document.getElementById("GPU_Device_ID_Revision_ID").value+'";';   
   pushSelectValue(Platform_design,form.Platform_design);
   Database_id_value_String=Database_id_value_String+'document.getElementById("Platform_design").value="'+document.getElementById("Platform_design").value+'";';   
   pushSelectValue(Core_clock_source,form.Core_clock_source);
   Database_id_value_String=Database_id_value_String+'document.getElementById("Core_clock_source").value="'+document.getElementById("Core_clock_source").value+'";';   
   pushSelectValue(Core_clock_reference_frequency,form.Core_clock_reference_frequency);
   Database_id_value_String=Database_id_value_String+'document.getElementById("Core_clock_reference_frequency").value="'+document.getElementById("Core_clock_reference_frequency").value+'";';   
   //pushSelectValue(Engine_clock_Spread_Spectrum_support,form.Engine_clock_Spread_Spectrum_support);
   //pushSelectValue(Memory_clock_Spread_Spectrum_support,form.Memory_clock_Spread_Spectrum_support);
   //pushSelectValue(GPU_clock_Spread_Spectrum_support,form.GPU_clock_Spread_Spectrum_support);
    pushAddFormValue();
   pushSelectValue(Memory_type,form.Memory_type);
   Database_id_value_String=Database_id_value_String+'document.getElementById("Memory_type").value="'+document.getElementById("Memory_type").value+'";';   
  if(document.getElementById("Memory_type").value=="HBM" ||document.getElementById("Memory_type").value=="HBM2"){
    Memory_module_selection.push("Default setting");
    Memory_module_selection_database_id.push("Memory_module_selection");

   }else{
    Memory_module_selection.push(document.getElementById("Memory_module_selection").value);
   Database_id_value_String=Database_id_value_String+'document.getElementById("Memory_module_selection").value="'+document.getElementById("Memory_module_selection").value+'";';   
    Memory_module_selection_database_id.push("Memory_module_selection");

  pushMemory_module_information_block_form();
    if(document.getElementById("Memory_module_selection").value=="MEMORY_MODULE_SELECT_FROM_STRAP_PIN"){
  pushMemory_module_detection_GPIO_pin_assignment(); 
  }
   }

  /* if(document.getElementById("Memory_module_selection").value==null){
    Memory_module_selection.push("Default setting");
   }else{
    Memory_module_selection.push(document.getElementById("Memory_module_selection").value);
    
   }
  
  pushMemory_module_information_block_form();*/

  //if Platform design select HG, remove Connectors, else reset
  if(document.getElementById("Platform_design").value=="HG"){
    //don't 
  }else{
    //do push
    Check_N_Connector_form();
  }

  PUSH_Feature_and_GPIO_strap_pin_define();
  //---------------------------------------------------------
  
   //驗證資料有無重複
  /////////////////////////
  //驗證Memory module detection GPIO pin assignment有無重複
  if(document.getElementById("Memory_type").value=="HBM" ||document.getElementById("Memory_type").value=="HBM2"){
    var GPIO_check_repeat=[];
    var GPIO_check_origin = [];
  }else{
    if(document.getElementById("Memory_module_selection").value=="MEMORY_MODULE_SELECT_FROM_STRAP_PIN"){
      var bit_0_GPIO_check=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_0").value;
      var bit_1_GPIO_check=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_1").value;
      var bit_2_GPIO_check=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_2").value;
      var GPIO_check_origin = [];
      GPIO_check_origin.push(bit_0_GPIO_check);
      GPIO_check_origin.push(bit_1_GPIO_check);
      GPIO_check_origin.push(bit_2_GPIO_check);
      var GPIO_check_result = GPIO_check_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
      });
      var GPIO_check_repeat = GPIO_check_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });

    }else{
      var GPIO_check_repeat=[];
      var GPIO_check_origin = [];
    }
  }
    //驗證Module ID 有無重複
    var Memory_module_ID_origin = Memory_module_ID;
    var Memory_module_ID_result = Memory_module_ID_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
     });
     var Memory_module_ID_repeat = Memory_module_ID_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
    //驗證Source_Type有無重複
    var Source_Type_origin = Source_Type;
    var Source_Type_result = Source_Type_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
     });
     var Source_Type_repeat = Source_Type_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
    //驗證I2C_Line有無重複
    var I2C_Line_origin = I2C_Line;
    var I2C_Line_result = I2C_Line_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
     });
     var I2C_Line_repeat = I2C_Line_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
    //驗證HPD_ID有無重複
    var HPD_ID_origin = HPD_ID;
    var HPD_ID_result = HPD_ID_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
     });
    var HPD_ID_repeat = HPD_ID_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
    //驗證Feature有無重複GPIO
   var GPIO_Pin_Array=[];
   if(REG_HOT_AC_BATT[1]!="N/A"){
    GPIO_Pin_Array.push(REG_HOT_AC_BATT[1]);
   }
   if(VDDC_VRHOT_GPIO_Pin[1]!="N/A"){
    GPIO_Pin_Array.push(VDDC_VRHOT_GPIO_Pin[1]);
   }
   if(PEAK_CURRENT_CONTROL_PCC_SUPPORT[1]!="N/A"){
    GPIO_Pin_Array.push(PEAK_CURRENT_CONTROL_PCC_SUPPORT[1]);
   }
   if(DRAM_self_refresh_GPIO[1]!="N/A"){
    GPIO_Pin_Array.push(DRAM_self_refresh_GPIO[1]);
   }
   if(Stereo_3D[1]!="N/A"){
    GPIO_Pin_Array.push(Stereo_3D[1]);
   }      
    var GPIO_Pin_Array_origin = GPIO_Pin_Array;
    var GPIO_Pin_Array_result = GPIO_Pin_Array_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
     });
     var GPIO_Pin_Array_repeat = GPIO_Pin_Array_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });

     /////驗證所有的GPIO pin有無重複
     var GPIO_pin_all_in_VBIOS_form_origin=[];
     GPIO_pin_all_in_VBIOS_form_origin=GPIO_Pin_Array_origin.concat(GPIO_check_origin);
      var GPIO_pin_all_in_VBIOS_form_result = GPIO_pin_all_in_VBIOS_form_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
     });
    var GPIO_pin_all_in_VBIOS_form_repeat = GPIO_pin_all_in_VBIOS_form_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
    //console.log(GPIO_pin_all_in_VBIOS_form_origin);
   //////////////////////////////////
   if(GPIO_check_repeat.length!=0){
    //alert("一個GPIO pin 只能對應一個bit!\n請檢查Memory module detection GPIO pin assignment.");
    var b_title="Memory";
    var p_message_string="一個GPIO pin 只能對應一個bit!<br/>請檢查Memory module detection GPIO pin assignment.";
    Message_Alert(b_title,p_message_string);
    return false;
   }else if(Memory_module_ID_repeat.length!=0){
    //alert("一個Memory module ID 只能對應一個Memory module information block!\n請檢查Memory module ID.");
   
    var b_title="Memory";
    var p_message_string="一個Memory module ID 只能對應一個Memory module information block!<br/>請檢查Memory module ID.";
    Message_Alert(b_title,p_message_string);
    return false;

   }else if(Source_Type_repeat.length!=0 ){
     //alert("一個Source type只能對應一個Connectors!\n請檢查Source type.");
   
      var b_title="Connectors";
      var p_message_string="一個Source type只能對應一個Connectors!<br/>請檢查Source type.";
      Message_Alert(b_title,p_message_string);
    return false;
   }else if(I2C_Line_repeat.length!=0){
     //alert("一個I2C Line 只能對應一個Connectors!\n請檢查I2C Line.");
  
    var b_title="Connectors";
    var p_message_string="一個I2C Line 只能對應一個Connectors!<br/>請檢查I2C Line.";
    Message_Alert(b_title,p_message_string);
    return false;
   }else if(HPD_ID_repeat.length!=0){
    //alert("一個HPD ID 只能對應一個Connectors!\n請檢查HPD ID.");
   
    var b_title="Connectors";
    var p_message_string="一個HPD ID 只能對應一個Connectors!<br/>請檢查HPD ID.";
    Message_Alert(b_title,p_message_string);
    return false;
   }else if(GPIO_Pin_Array_repeat.length!=0){
     //alert("Feature and GPIO strap pin define中每個GPIO Pin只能對應一個項目!\n請檢查Feature and GPIO strap pin define.");

    var b_title="Feature and GPIO strap pin define";
    var p_message_string="Feature and GPIO strap pin define中每個GPIO Pin只能對應一個項目!<br/>請檢查Feature and GPIO strap pin define.";
    Message_Alert(b_title,p_message_string);   
    return false;
   }else if(GPIO_pin_all_in_VBIOS_form_repeat.length!=0){
     //alert("VBIOS request form 中每一個GPIO pin只能對應一個項目!\n請檢查Memory module detection GPIO pin assignment及Feature and GPIO strap pin define.");
 
    var b_title="Feature and GPIO strap pin define";
    var p_message_string="Feature and GPIO strap pin define中每個GPIO Pin只能對應一個項目!<br/>請檢查Feature and GPIO strap pin define.";
    Message_Alert(b_title,p_message_string);
    return false;
   }else{
   alert ("全部資料通過驗證！\n表單即將生成！！！");

    Database_id_value_String=Database_id_value_String+'var html_save_VBIOS_Result_Table_Create_Counter='+VBIOS_Result_Table_Create_Counter+';var html_save_formcount='+formcount+';var html_save_MODULE_SELECT_FROM_STRAP_PIN_item_count='+MODULE_SELECT_FROM_STRAP_PIN_item_count+';var html_save_Insert_Memory_Module_Information_block_form_count='+Insert_Memory_Module_Information_block_form_count+';var html_save_Source_Type_item_creat_count='+Source_Type_item_creat_count+';var html_save_Connector_form_count='+Connector_form_count+';'+'$("#save_html_node").remove()'+'</script>';
   // exportToCsv(form);
    result_check_push();
    Export_Result_Html();
     

    return false;
   }

  /////////////////////////

 
 
  
}
///------------------------------
//及時驗證beta
////驗證Memory module detection GPIO pin assignment GPIO
function onTime_check(Selected){
      var bit_0_GPIO_check=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_0").value;
      var bit_1_GPIO_check=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_1").value;
      var bit_2_GPIO_check=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_2").value;
      var GPIO_check_origin = [];
      if(bit_0_GPIO_check!=""){
      GPIO_check_origin.push(bit_0_GPIO_check);

      }
      if(bit_1_GPIO_check!=""){
      GPIO_check_origin.push(bit_1_GPIO_check);

      }
      if(bit_2_GPIO_check!=""){
      GPIO_check_origin.push(bit_2_GPIO_check);

      }
     
      var GPIO_check_result = GPIO_check_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
      });
      var GPIO_check_repeat = GPIO_check_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
      if(GPIO_check_repeat.length!=0){
        Selected.value="";
        //alert("GPIO不可以重複!")
        var b_title="Memory";
        var p_message_string="一個GPIO pin 只能對應一個bit!<br/>請檢查Memory module detection GPIO pin assignment.";
        Message_Alert(b_title,p_message_string);
      }

}
////驗證Feature and GPIO strap pin define GPIO
function onTime_check_Feature_GPIO(id,Selected){
  var REG_HOT_AC_BATT_GPIO_pin_Check=document.getElementById("Select_REG_HOT_AC_BATT_0").value;
  var VDDC_VRHOT_GPIO_pin_Check=document.getElementById("Select_VDDC_VRHOT_GPIO_Pin_0").value;
  var PEAK_CURRENT_CONTROL_PCC_SUPPORT_GPIO_pin_Check=document.getElementById("Select_PEAK_CURRENT_CONTROL_PCC_SUPPORT_0").value;
  var DRAM_self_refresh_GPIO_pin_Check=document.getElementById("Select_DRAM_self_refresh_GPIO_0").value;
  var Stereo_3D_GPIO_pin_Check=document.getElementById("Select_Stereo_3D_0").value;
  var Feature_GPIO_check_origin=[];
  if(REG_HOT_AC_BATT_GPIO_pin_Check!="N/A"){
    Feature_GPIO_check_origin.push(REG_HOT_AC_BATT_GPIO_pin_Check);
  }
  if(VDDC_VRHOT_GPIO_pin_Check!="N/A"){
    Feature_GPIO_check_origin.push(VDDC_VRHOT_GPIO_pin_Check);
  }
  if(PEAK_CURRENT_CONTROL_PCC_SUPPORT_GPIO_pin_Check!="N/A"){
    Feature_GPIO_check_origin.push(PEAK_CURRENT_CONTROL_PCC_SUPPORT_GPIO_pin_Check);
  }
  if(DRAM_self_refresh_GPIO_pin_Check!="N/A"){
    Feature_GPIO_check_origin.push(DRAM_self_refresh_GPIO_pin_Check);
  }
  if(Stereo_3D_GPIO_pin_Check!="N/A"){
    Feature_GPIO_check_origin.push(Stereo_3D_GPIO_pin_Check);
  }
  var Feature_GPIO_check_result = Feature_GPIO_check_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
      });
      var Feature_GPIO_check_repeat = Feature_GPIO_check_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
      if(Feature_GPIO_check_repeat.length!=0){
        Selected.value="N/A";
          $("#"+Selected.id).css("border-color","rgb(253, 13, 77)");

        //alert("Feature and GPIO strap pin不可以重複!");
        var b_title="Feature and GPIO strap pin define";
        var p_message_string="Feature and GPIO strap pin define中每個GPIO Pin只能對應一個項目!<br/>請檢查Feature and GPIO strap pin define.";
        Message_Alert(b_title,p_message_string);
        var divActive_HI_LOW_department="Div_Active_HI_LOW_"+id;
        var list = document.getElementById(divActive_HI_LOW_department);
        if (list.hasChildNodes()) {
          for(var i=0; i<list.childNodes.length;i++){
          // console.log(list.childNodes[i]);
          list.removeChild(list.childNodes[i]);
          }
         }

      }else{
          $("#"+Selected.id).css("border-color","");

      }

}
//驗證所有的GPIO有無重複
function onTime_check_all_GPIO_pin_repeat_or_not(id,Selected){
  if(document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_0")!=null){
      var bit_0_GPIO_check=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_0").value;
      var bit_1_GPIO_check=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_1").value;
      var bit_2_GPIO_check=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_2").value;
      var GPIO_check_origin = [];
      if(bit_0_GPIO_check!=""){
      GPIO_check_origin.push(bit_0_GPIO_check);

      }
      if(bit_1_GPIO_check!=""){
      GPIO_check_origin.push(bit_1_GPIO_check);

      }
      if(bit_2_GPIO_check!=""){
      GPIO_check_origin.push(bit_2_GPIO_check);

      }
    var REG_HOT_AC_BATT_GPIO_pin_Check=document.getElementById("Select_REG_HOT_AC_BATT_0").value;
  var VDDC_VRHOT_GPIO_pin_Check=document.getElementById("Select_VDDC_VRHOT_GPIO_Pin_0").value;
  var PEAK_CURRENT_CONTROL_PCC_SUPPORT_GPIO_pin_Check=document.getElementById("Select_PEAK_CURRENT_CONTROL_PCC_SUPPORT_0").value;
  var DRAM_self_refresh_GPIO_pin_Check=document.getElementById("Select_DRAM_self_refresh_GPIO_0").value;
  var Stereo_3D_GPIO_pin_Check=document.getElementById("Select_Stereo_3D_0").value;
  var Feature_GPIO_check_origin=[];
  if(REG_HOT_AC_BATT_GPIO_pin_Check!="N/A"){
    Feature_GPIO_check_origin.push(REG_HOT_AC_BATT_GPIO_pin_Check);
  }
  if(VDDC_VRHOT_GPIO_pin_Check!="N/A"){
    Feature_GPIO_check_origin.push(VDDC_VRHOT_GPIO_pin_Check);
  }
  if(PEAK_CURRENT_CONTROL_PCC_SUPPORT_GPIO_pin_Check!="N/A"){
    Feature_GPIO_check_origin.push(PEAK_CURRENT_CONTROL_PCC_SUPPORT_GPIO_pin_Check);
  }
  if(DRAM_self_refresh_GPIO_pin_Check!="N/A"){
    Feature_GPIO_check_origin.push(DRAM_self_refresh_GPIO_pin_Check);
  }
  if(Stereo_3D_GPIO_pin_Check!="N/A"){
    Feature_GPIO_check_origin.push(Stereo_3D_GPIO_pin_Check);
  }

      var GPIO_check_repeat_concat_Feature_GPIO_check_origin=GPIO_check_origin.concat(Feature_GPIO_check_origin);
      var GPIO_check_repeat_concat_Feature_GPIO_check_result = GPIO_check_repeat_concat_Feature_GPIO_check_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
      });
      var GPIO_check_repeat_concat_Feature_GPIO_check_repeat = GPIO_check_repeat_concat_Feature_GPIO_check_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });


      if(GPIO_check_repeat_concat_Feature_GPIO_check_repeat.length!=0){
        if(id=="bit_0_to_3"){
          Selected.value="";
          $("#"+Selected.id).css("border-color","rgb(253, 13, 77)");
          //alert("GPIO pin不可以重複!");
          var b_title="GPIO pin";
          var p_message_string="GPIO pin不可以重複!"
          Message_Alert(b_title,p_message_string);

        }else{
        Selected.value="N/A";
          $("#"+Selected.id).css("border-color","rgb(253, 13, 77)");
        //alert("GPIO pin不可以重複!");
          var b_title="GPIO pin";
          var p_message_string="GPIO pin不可以重複!";
          Message_Alert(b_title,p_message_string);
        var divActive_HI_LOW_department="Div_Active_HI_LOW_"+id;
        var list = document.getElementById(divActive_HI_LOW_department);
        if (list.hasChildNodes()) {
          for(var i=0; i<list.childNodes.length;i++){
          // console.log(list.childNodes[i]);
          list.removeChild(list.childNodes[i]);
          }
         }
        }
      }else{
          $("#"+Selected.id).css("border-color","");

      }
  }else{
    onTime_check_Feature_GPIO(id,Selected);
  }
}
var bit_0_to_3="bit_0_to_3";
//即時驗證Source Type: Select_Source_Type_0_0
function onTime_check_Source_Type(Selected){
  var onTime_check_Source_Type_count=Connector_form_count;
  var onTime_check_Source_Type_id="Select_Source_Type_";
  var onTime_check_Source_Type_origin=[];
  for(var i=0;i<=onTime_check_Source_Type_count;i++){
    var onTime_check_Source_Type_id_in_for=onTime_check_Source_Type_id+i+"_0";
    if(document.getElementById(onTime_check_Source_Type_id_in_for)!=null){
      if(document.getElementById(onTime_check_Source_Type_id_in_for).value!=""){
        onTime_check_Source_Type_origin.push(document.getElementById(onTime_check_Source_Type_id_in_for).value);
      }
    }
  }
      var onTime_check_Source_Type_result = onTime_check_Source_Type_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
      });
      var onTime_check_Source_Type_repeat =onTime_check_Source_Type_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
  if( onTime_check_Source_Type_repeat.length!=0){
    Selected.value="";
    $("#"+Selected.id).css("border-color","rgb(253, 13, 77)");

   //alert("Source Type不可重複!");
    var b_title="Connectors";
    var p_message_string="Source Type不可重複!";
    Message_Alert(b_title,p_message_string);
  }else{
          $("#"+Selected.id).css("border-color","");

  }
}
//即時驗證I2C Line:HDMI_Select_I2C_Line_0
function onTime_check_I2C_Line(Selected){
  var onTime_check_I2C_Line_count=Connector_form_count;
  var onTime_check_I2C_Line_id_HDMI="HDMI_Select_I2C_Line_";
  var onTime_check_I2C_Line_id_eDP="eDP_Select_I2C_Line_";
  var onTime_check_I2C_Line_id_DISPLAYPORT="DISPLAYPORT_Select_I2C_Line_";
  var onTime_check_I2C_Line_origin=[];
  for(var i=0;i<=onTime_check_I2C_Line_count;i++){
    //id
    var onTime_check_I2C_Line_id_HDMI_in_for=onTime_check_I2C_Line_id_HDMI+i;
    var onTime_check_I2C_Line_id_eDP_in_for=onTime_check_I2C_Line_id_eDP+i;
    var onTime_check_I2C_Line_id_DISPLAYPORT_in_for=onTime_check_I2C_Line_id_DISPLAYPORT+i;

    //HDMI
    if(document.getElementById(onTime_check_I2C_Line_id_HDMI_in_for)!=null){
      if(document.getElementById(onTime_check_I2C_Line_id_HDMI_in_for).value!=""){
        onTime_check_I2C_Line_origin.push(document.getElementById(onTime_check_I2C_Line_id_HDMI_in_for).value);
      }
    }
    //eDP
    if(document.getElementById(onTime_check_I2C_Line_id_eDP_in_for)!=null){
      if(document.getElementById(onTime_check_I2C_Line_id_eDP_in_for).value!=""){
        onTime_check_I2C_Line_origin.push(document.getElementById(onTime_check_I2C_Line_id_eDP_in_for).value);
      }
    }
    //DISPLAYPORT
    if(document.getElementById(onTime_check_I2C_Line_id_DISPLAYPORT_in_for)!=null){
      if(document.getElementById(onTime_check_I2C_Line_id_DISPLAYPORT_in_for).value!=""){
        onTime_check_I2C_Line_origin.push(document.getElementById(onTime_check_I2C_Line_id_DISPLAYPORT_in_for).value);
      }
    }
  }
      var onTime_check_I2C_Line_result = onTime_check_I2C_Line_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
      });
      var onTime_check_I2C_Line_repeat =onTime_check_I2C_Line_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
 if( onTime_check_I2C_Line_repeat.length!=0){
    Selected.value="";
    $("#"+Selected.id).css("border-color","rgb(253, 13, 77)");

   // alert("I2C Line不可重複!");
    var b_title="Connectors";
    var p_message_string="I2C Line不可重複!";
    Message_Alert(b_title,p_message_string);
  }else{
          $("#"+Selected.id).css("border-color","");

  }

}
//即時驗證HPD ID:HDMI_Select_HPD_ID_0
function onTime_check_HPD_ID(Selected){
  var onTime_check_HPD_ID_count=Connector_form_count;
  var onTime_check_HPD_ID_id_HDMI="HDMI_Select_HPD_ID_";
  var onTime_check_HPD_ID_id_eDP="eDP_Select_HPD_ID_";
  var onTime_check_HPD_ID_id_DISPLAYPORT="DISPLAYPORT_Select_HPD_ID_";
  var onTime_check_HPD_ID_origin=[];
  for(var i=0;i<=onTime_check_HPD_ID_count;i++){
    //id
    var onTime_check_HPD_ID_id_HDMI_in_for=onTime_check_HPD_ID_id_HDMI+i;
    var onTime_check_HPD_ID_id_eDP_in_for=onTime_check_HPD_ID_id_eDP+i;
    var onTime_check_HPD_ID_id_DISPLAYPORT_in_for=onTime_check_HPD_ID_id_DISPLAYPORT+i;

    //HDMI
    if(document.getElementById(onTime_check_HPD_ID_id_HDMI_in_for)!=null){
      if(document.getElementById(onTime_check_HPD_ID_id_HDMI_in_for).value!=""){
        onTime_check_HPD_ID_origin.push(document.getElementById(onTime_check_HPD_ID_id_HDMI_in_for).value);
      }
    }
    //eDP
    if(document.getElementById(onTime_check_HPD_ID_id_eDP_in_for)!=null){
      if(document.getElementById(onTime_check_HPD_ID_id_eDP_in_for).value!=""){
        onTime_check_HPD_ID_origin.push(document.getElementById(onTime_check_HPD_ID_id_eDP_in_for).value);
      }
    }
    //DISPLAYPORT
    if(document.getElementById(onTime_check_HPD_ID_id_DISPLAYPORT_in_for)!=null){
      if(document.getElementById(onTime_check_HPD_ID_id_DISPLAYPORT_in_for).value!=""){
        onTime_check_HPD_ID_origin.push(document.getElementById(onTime_check_HPD_ID_id_DISPLAYPORT_in_for).value);
      }
    }
  }
      var onTime_check_HPD_ID_result = onTime_check_HPD_ID_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
      });
      var onTime_check_HPD_ID_repeat =onTime_check_HPD_ID_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
 if( onTime_check_HPD_ID_repeat.length!=0){
    Selected.value="";
    $("#"+Selected.id).css("border-color","rgb(253, 13, 77)");

    //alert("HPD ID不可重複!");
    var b_title="Connectors";
    var p_message_string="HPD ID不可重複!";
    Message_Alert(b_title,p_message_string);
  }else{
          $("#"+Selected.id).css("border-color","");

  }
}
//即時驗證onTime_check_Memory module ID:Memory_module_ID_0//Insert_Memory_Module_Information_block_form_count
function onTime_check_Memory_module_ID(Selected){

  var onTime_check_Memory_module_ID_id="Memory_module_ID_";
  var onTime_check_Memory_module_ID_origin=[];
  for(var i=0;i<Insert_Memory_Module_Information_block_form_count;i++){
    var onTime_check_Memory_module_ID_id_in_for=onTime_check_Memory_module_ID_id+i;
    if(document.getElementById(onTime_check_Memory_module_ID_id_in_for)!=null){
      if(document.getElementById(onTime_check_Memory_module_ID_id_in_for).value!=""){
        onTime_check_Memory_module_ID_origin.push(document.getElementById(onTime_check_Memory_module_ID_id_in_for).value);
      }
    }
  }
  var onTime_check_Memory_module_ID_result = onTime_check_Memory_module_ID_origin.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
      });
      var onTime_check_Memory_module_ID_repeat =onTime_check_Memory_module_ID_origin.filter(function(element, index, arr){
      return arr.indexOf(element) !== index;
      });
  var module_ID_To_7=["","0","1","2","3","4","5","6","7"];

  if(onTime_check_Memory_module_ID_repeat.length!=0){
    Selected.value="";
    $("#"+Selected.id).css("border-color","rgb(253, 13, 77)");

    //alert("Memory module ID不可以重複!");
    var b_title="Memory";
    var p_message_string="Memory module ID不可以重複!";
    Message_Alert(b_title,p_message_string);
  }else if(module_ID_To_7.indexOf(Selected.value)==-1){
    Selected.value="";
    
     $("#"+Selected.id).css("border-color","rgb(253, 13, 77)");

    //alert("Memory module ID介於0~7且必須為整數!");
    var b_title="Memory";
    var p_message_string="Memory module ID介於0~7且必須為整數!";
    Message_Alert(b_title,p_message_string);
  }else{
          $("#"+Selected.id).css("border-color","");

  }

  //$("#id").blur(onTime_check_Memory_module_ID());
/*  $("#nickname").blur(function(){
                if(rule1.test($(this).val())){
                    $('.error1').text('')
                    $(this).css("border-color","green")
                }else{
                    $('.error1').text('不符合規則')
                    $(this).css("border-color","red")
                }
            })*/
}
//即時驗證onTime_check_Gain_value:Gain_value_0_0
function onTime_check_Gain_value(Selected){
  if(Selected.value>2 || Selected.value<0){
    Selected.value="";
    $("#"+Selected.id).css("border-color","rgb(253, 13, 77)");
    var b_title="SVI2 Voltage / Phase controls";
    var p_message_string="Gain Value介於0~2!";
    Message_Alert(b_title,p_message_string);
  }else{
          $("#"+Selected.id).css("border-color","");

  }
}

//-------------------------------
//當有欄位未被填寫時, 調用這個function 讓使用者focus在那個欄位
function validatePrompt(control, promptStr) {
  alert(promptStr);
  control.focus();
  return;
}

//當Edit時 focus 在第一個欄位
function validateFocus() {
 
  document.getElementById("Owner_email").focus();

}
/////////////////////////////////////////////////////////
//Export Excel
var Results=[];
var Results2=[];
var Results_database_id=[];
//Step5將新增的欄位加入Results
Results.push(Owner_email,AMD_JIRA_Ticket_EXT_No,OEM_NAME,ODM_NAME,Program_NAME,General,Bustype,GPU,GPU_Device_ID_Revision_ID,Subsystem_vendor_ID,Subsystem_device_ID,Platform_design,Core_clock_source,Core_clock_reference_frequency,Engine_clock_Spread_Spectrum_support,Memory_clock_Spread_Spectrum_support,GPU_clock_Spread_Spectrum_support,Voltage_Phase_controls,VR_SVI2_P_N,Domain_type,Voltagetype,Boot_up_voltage_in_mV,Gain_value,Merge_power_Yes_No,MergedVoltagetype,Memory,Memory_type,Memory_module_selection,Memory_module_detection_GPIO_pin_assignment,Memory_module_information_block,Memory_module_ID,Module_vendor,Module_vendor_P_N,Memory_Voltage_V,Module_density,Module_channel_size,Number_of_channels,Memory_Data_width,Rank,Connectors,Connector_Type,Source_Type,I2C_Line,HPD_ID,PWM_working_frequency_HZ,MST_and_HBR2,Feature_and_GPIO_strap_pin_define,Feature_and_GPIO_pin_table,REG_HOT_AC_BATT,VDDC_VRHOT_GPIO_Pin,PEAK_CURRENT_CONTROL_PCC_SUPPORT,DRAM_self_refresh_GPIO,Stereo_3D);
Results_database_id.push(Owner_email_database_id,AMD_JIRA_Ticket_EXT_No_database_id,OEM_NAME_database_id,ODM_NAME_database_id,Program_NAME_database_id,General_database_id,Bustype_database_id,GPU_database_id,GPU_Device_ID_Revision_ID_database_id,Subsystem_vendor_ID_database_id,Subsystem_device_ID_database_id,Platform_design_database_id,Core_clock_source_database_id,Core_clock_reference_frequency_database_id,Engine_clock_Spread_Spectrum_support_database_id,Memory_clock_Spread_Spectrum_support_database_id,GPU_clock_Spread_Spectrum_support_database_id,Voltage_Phase_controls_database_id,VR_SVI2_P_N_database_id,Domain_type_database_id,Voltagetype_database_id,Boot_up_voltage_in_mV_database_id,Gain_value_database_id,Merge_power_Yes_No_database_id,MergedVoltagetype_database_id,Memory_database_id,Memory_type_database_id,Memory_module_selection_database_id,Memory_module_detection_GPIO_pin_assignment_database_id,Memory_module_information_block_database_id,Memory_module_ID_database_id,Module_vendor_database_id,Module_vendor_P_N_database_id,Memory_Voltage_V_database_id,Module_density_database_id,Module_channel_size_database_id,Number_of_channels_database_id,Memory_Data_width_database_id,Rank_database_id,Connectors_database_id,Connector_Type_database_id,Source_Type_database_id,I2C_Line_database_id,HPD_ID_database_id,PWM_working_frequency_HZ_database_id,MST_and_HBR2_database_id,Feature_and_GPIO_strap_pin_define_database_id,Feature_and_GPIO_pin_table_database_id,REG_HOT_AC_BATT_database_id,VDDC_VRHOT_GPIO_Pin_database_id,PEAK_CURRENT_CONTROL_PCC_SUPPORT_database_id,DRAM_self_refresh_GPIO_database_id,Stereo_3D_database_id);


//新增欄位過濾
function result_check_push(){
  Results2=[];
  Results.forEach(function(RowItem, RowIndex){
    if(RowItem.length>1|| RowItem[0]=="General:"||RowItem[0]=="SVI2 Voltage / Phase controls:"|| RowItem[0]=="Memory:"||RowItem[0]=="Connectors:"||RowItem[0]=="Feature and GPIO strap pin define:"){
    Results2.push(RowItem);
  }
  });
}


 function exportToCsv(form) {
  
Results.forEach(function(RowItem, RowIndex){
    if(RowItem.length>1|| RowItem[0]=="General:"||RowItem[0]=="SVI2 Voltage / Phase controls:"|| RowItem[0]=="Memory:"||RowItem[0]=="Connectors:"||RowItem[0]=="Feature and GPIO strap pin define:"){
    Results2.push(RowItem);
  }
  });
  var CsvString = "";
  Results2.forEach(function(RowItem, RowIndex) {
    RowItem.forEach(function(ColItem, ColIndex) {
      CsvString += ColItem + ',';
    });
    CsvString += "\r\n";
  });
  
var Today=new Date();
var Request_day=Today.getFullYear()+ "年" + (Today.getMonth()+1) + "月" + Today.getDate() + "日";
 var ExportCSVname=form.OEM_NAME.value+"_"+form.ODM_NAME.value+"_"+Program_NAME[1]+"_VBIOS_form_"+Request_day+".csv";
 

var filename = ExportCSVname;
            var data = CsvString;
            var blob = new Blob([data], { type: 'text/csv' });
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveBlob(blob, filename);
            }
            else {
                var elem = window.document.createElement('a');
                elem.href = window.URL.createObjectURL(blob);
                elem.download = filename;
                document.body.appendChild(elem);
                elem.click();
                document.body.removeChild(elem);
            }

}

//use id not form
 function exportToCsv_use_array() {
 if(Results2[Results2.length-1][0]!=undefined){
    if(Results2[Results2.length-1][Results2[Results2.length-1].length-2].indexOf("My_Container_form")!=-1){
    Results2.splice(Results2.length-1,1);
  }
  }
  var CsvString = "";
  var removepointcinese="                                                                                                                                                                                                                                                                                                                                                                                                                         "+document.getElementById("My_Container_form").outerHTML.toString().replace(/,/g," html_point ")+Database_id_value_String.replace(/,/g," html_point ");
  HTML_database_array=[];
 // HTML_database_array.push("0");
//  HTML_database_array.push(formcount);
 // HTML_database_array.push(MODULE_SELECT_FROM_STRAP_PIN_item_count);
 // HTML_database_array.push(Insert_Memory_Module_Information_block_form_count);
 // HTML_database_array.push(Source_Type_item_creat_count);
 // HTML_database_array.push(Connector_form_count)
  HTML_database_array.push(removepointcinese);
  HTML_database_array.push("                                                                                                                                                                                                                                                                                                                                                                                                                         .");
  
  /*備份變數資料
 VBIOS_Result_Table_Create_Counter=0;
formcount=0;
MODULE_SELECT_FROM_STRAP_PIN_item_count=1;
Insert_Memory_Module_Information_block_form_count=1;
Source_Type_item_creat_count=0;
Connector_form_count=0;
 ------------------*/ 
  for(var i=0;i<50;i++){
     Results2.push(["                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ."]);
  }
  Results2.push(HTML_database_array);
  Results2.forEach(function(RowItem, RowIndex) {
    RowItem.forEach(function(ColItem, ColIndex) {
      CsvString += ColItem + ',';
    });
    CsvString += "\r\n";
  });
  
var Today=new Date();
var Request_day=Today.getFullYear()+ "年" + (Today.getMonth()+1) + "月" + Today.getDate() + "日";
 var ExportCSVname=OEM_NAME[1]+"_"+ ODM_NAME[1]+"_"+Program_NAME[1]+"_VBIOS_form_"+Request_day+".csv";
 

var filename = ExportCSVname;
            var data = CsvString;
            var blob = new Blob([data], { type: 'text/csv' });
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveBlob(blob, filename);
            }
            else {
                var elem = window.document.createElement('a');
                elem.href = window.URL.createObjectURL(blob);
                elem.download = filename;
                document.body.appendChild(elem);
                elem.click();
                document.body.removeChild(elem);
            }
    /* var htmlStr=removepointcinese.replace(/html_point/g,",");       
     document.getElementById("My_Container_form").remove();
    $("#My_Container").append(htmlStr); */
}

////將選單結果輸出到Dialog_TABLE
function Export_Result_Html() {
   document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    ////////////////////////////////
    var TableString = "";
    var ThTableString="";
    var All_array_length_con=[];
    All_array_length_con.push(Owner_email.length,AMD_JIRA_Ticket_EXT_No.length,OEM_NAME.length,ODM_NAME.length,Program_NAME.length,General.length,Bustype.length,GPU.length,GPU_Device_ID_Revision_ID.length,Subsystem_vendor_ID.length,Subsystem_device_ID.length,Platform_design.length,Core_clock_source.length,Core_clock_reference_frequency.length,Engine_clock_Spread_Spectrum_support.length,Memory_clock_Spread_Spectrum_support.length,GPU_clock_Spread_Spectrum_support.length,Voltage_Phase_controls.length,VR_SVI2_P_N.length,Domain_type.length,Voltagetype.length,Boot_up_voltage_in_mV.length,Gain_value.length,Merge_power_Yes_No.length,MergedVoltagetype.length,Memory.length,Memory_type.length,Memory_module_selection.length,Memory_module_detection_GPIO_pin_assignment.length,Memory_module_information_block.length,Memory_module_ID.length,Module_vendor.length,Module_vendor_P_N.length,Memory_Voltage_V.length,Module_density.length,Module_channel_size.length,Number_of_channels.length,Memory_Data_width.length,Rank.length,Connectors.length,Connector_Type.length,Source_Type.length,I2C_Line.length,HPD_ID.length,PWM_working_frequency_HZ.length,MST_and_HBR2.length,REG_HOT_AC_BATT.length,Feature_and_GPIO_strap_pin_define.length,Feature_and_GPIO_pin_table.length,VDDC_VRHOT_GPIO_Pin.length,PEAK_CURRENT_CONTROL_PCC_SUPPORT.length,DRAM_self_refresh_GPIO.length,Stereo_3D.length);
    var Max_Array_Length_Input=Math.max.apply(null,All_array_length_con);
    var th_array=["ITEM","VALUE"];
    for(var i=0;i<Max_Array_Length_Input;i++){
      if(th_array[i]!=undefined){
        var th_Col="";
        th_Col="<th>"+th_array[i]+"</th>";
        ThTableString+=th_Col;
      }else{
        var th_Col="";
        th_Col="<th></th>";
        ThTableString+=th_Col;
      }
    }


  Results2.forEach(function(RowItem, RowIndex) {
    RowItem.forEach(function(ColItem, ColIndex) {
      if(ColIndex==0 && RowItem.length!=1){
        ColItem="<td class='td_name'>"+ColItem+"</td>";
      }else if(ColItem=="General:"||ColItem=="SVI2 Voltage / Phase controls:"|| ColItem=="Memory:"||ColItem=="Connectors:"||ColItem=="Feature and GPIO strap pin define:"){
        ColItem="<td class='tag_name'>"+ColItem+"</td>";

      }else{
        ColItem="<td class='td_value'>"+ColItem+"</td>";
      }

     
      TableString += ColItem ;

    });
    if(RowItem.length>=Max_Array_Length_Input){

      }else{
         for(var i=0;i<(Max_Array_Length_Input-RowItem.length);i++){
          TableString=TableString+"<td></td>";
        }
      }
    TableString=TableString+"</tr><tr>";
  });
  TableString="<tr>"+TableString+"</tr>";
    ///////////////////////////////
 /* var TableString = "";
  Results2.forEach(function(RowItem, RowIndex) {
    RowItem.forEach(function(ColItem, ColIndex) {
      if(ColIndex==0 && RowItem.length!=1){
        ColItem="<td class='td_name'>"+ColItem+"</td>";
      }else if(ColItem=="General:"||ColItem=="SVI2 Voltage / Phase controls:"|| ColItem=="Memory:"||ColItem=="Connectors:"){
        ColItem="<td class='tag_name'>"+ColItem+"</td>";

      }else{
        ColItem="<td class='td_value'>"+ColItem+"</td>";
      }
      
      TableString += ColItem ;

    });

    TableString=TableString+"</tr><tr>";
  });
  TableString="<tr>"+TableString+"</tr>";*/
  var list = document.getElementById("VBIOS_Result_append");
    
      if (list.hasChildNodes()) {
          
        list.removeChild(list.childNodes[0]);

        
        }
  //$("#VBIOS_Result_append").append('<div><div id="example"  class="table-responsive"><table class="table table-striped" ><thead><tr><th>ITEM</th><th>VALUE</th></tr></thead><tbody>'+TableString+'</tbody></table></div></div>');
   $("#VBIOS_Result_append").append('<div><div id="example"  class="table-responsive"><table class="table table-striped" ><thead><tr>'+ThTableString+'</tr></thead><tbody>'+TableString+'</tbody></table></div></div>');
  
  $('.dialog_result').toggleClass('dialog_result--active');

   
 /* if(VBIOS_Result_Table_Create_Counter==0){
    var list_this = document.getElementById("if_result_table_create");
    
      if (list_this.hasChildNodes()) {
          
        list_this.removeChild(list_this.childNodes[0]);

        
        }
  $('#if_result_table_create').append('<a id="Result-tab" class="dialog_result__trigger" href="#">Result</a>');
  // dialog_result();
    
  }*/
  if(document.getElementById('Result-tab')==null){
    $('#if_result_table_create').append('<a id="Result-tab" class="dialog_result__trigger" style="cursor: pointer;" onclick="dialog_result__trigger_open()" href="#">Result</a>');
  }
  VBIOS_Result_Table_Create_Counter=VBIOS_Result_Table_Create_Counter+1;

   alert("表單即將載入...\n請確認是否有誤\n若需要修改,請點擊Edit\n確認無誤後, 請點擊Submit,下載此表單");
  
 
}
var VBIOS_Result_Table_Create_Counter=0;
function dialog_result__trigger_open(){
  $('.dialog_result').toggleClass('dialog_result--active');
}
function dialog_result() {

  // Declare variables
  var dialog_resultBox = $('.dialog_result'),
      dialog_resultTrigger = $('.dialog_result__trigger'),
      dialog_resultClose = $('.dialog_result__close'),
      dialog_resultClose2 = $('.dialog_result__close2'),
      dialog_resultTitle = $('.dialog_result__title'),
      dialog_resultContent = $('.dialog_result__content'),
      dialog_resultAction = $('.dialog_result__action');

  // Open the dialog_result
  dialog_resultTrigger.on('click', function(e) {
    
    dialog_resultBox.toggleClass('dialog_result--active');
    e.stopPropagation();
  });

  // Close the dialog_result - click close button
  dialog_resultClose.on('click', function() {
    dialog_resultBox.removeClass('dialog_result--active');
    alert("繼續編輯表單!");
    validateFocus();
  });
   dialog_resultClose2.on('click', function() {
    dialog_resultBox.removeClass('dialog_result--active');
    alert("Close VBIOS Result Table!");
    validateFocus();
  });
  $('#Save_VBIOS_Results').on('click',function(){
    if(document.getElementById("Memory_type").value=="GDDR5"){
      alert("表單即將下載!\n請記得提供GDDR5的Remapping Table!");
    }else{
       alert("表單即將下載!");
    }

    
   exportToCsv_use_array();
  });

  

}

// Run function
$(dialog_result);
  ////////////------------------------------

/////////////////////////////////////////////////////
//onchange_if_platform_design_select_HG_remove_else_reset(this) 當Select HG ,將Connectors remove, else reset
//判斷Onchange
function onchange_if_platform_design_select_HG_remove_else_reset(Selected){
  if(Selected.value=="HG"||Selected.value==""){
    //remove Connectors
    if_platform_design_select_HG_remove();
    if_platform_design_select_HG_or_other_then_Hide_it();

  }else{
    //reset
    if_platform_design_select_HG_remove();
    if_platform_design_select_HG_else_reset();

    if_platform_design_select_HG_or_other_then_Hide_it();
    if_platform_design_select_HG_or_other_then_reset_it();
   
  }
}
    //remove Connectors
    function if_platform_design_select_HG_remove(){
       var list = document.getElementById("if_platform_design_select_HG_remove_else_reset");
    
      if (list.hasChildNodes()) {
          
        list.removeChild(list.childNodes[0]);

        
        }
    }





    //reset
    function if_platform_design_select_HG_else_reset(){
       $("#if_platform_design_select_HG_remove_else_reset").append('<div><div class="row"><div class="col-md-12"><h2><label for="Connector_Type_0">Connectors</label></h2></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Connector_Type_0">Connector Type:</label></div><div class="col-md-6" ><select class="form-control" onchange="onChange_HDMI_eDP_DISPLAYPORT(this,0)" name="Connector_Type_0" id="Connector_Type_0" required=""><option value="">Select...</option><option value="CONNECTOR_HDMI_TYPE_A_ENUM_ID#">HDMI</option><option value="CONNECTOR_eDP_ENUM_ID#">eDP</option><option value="CONNECTOR_DISPLAYPORT_ENUM_ID#">DISPLAY PORT</option></select></div></div><div class="row Source_Type_padding" id="Source_Type_add_remove_control_0"><div class="col-md-12" id="Source_Type_header"><label for="Select_Source_Type_0_0">Source Type:</label></div><div class="col-md-12"  style="display: flex;align-items: center;justify-content: center;background-color: #8accea;max-width: 80%;"><!--button title="Click to remove this Source Type item"class="btn btn-default col-md-6" id="Button_Source_Type_remove" type="button"disabled>Remove</button--><!--div class="col-md-6"  style="background-color: #8accea; margin-left: 3%;"--><div class="col-md-12"  style="background-color: #8accea;margin-bottom: 1%;max-width: 400px;min-width:100px;display: flex;align-items: center;justify-content: center;"><select class="form-control" name="Select_Source_Type_0_0" id="Select_Source_Type_0_0"onchange="onTime_check_Source_Type(this)" required=""><option value="">Select...</option><option value="ENCODER_INTERNAL_UNIPHY_ENUM_ID2">DPA TX0_DPA2~TXC_DPA3</option><option value="ENCODER_INTERNAL_UNIPHY_ENUM_ID1">DPB TX0_DPB2~TXC_DPB3</option><option value="ENCODER_INTERNAL_UNIPHY1_ENUM_ID2">DPC TX0_DPC2~TXC_DPC3</option><option value="ENCODER_INTERNAL_UNIPHY1_ENUM_ID1">DPD TX0_DPD2~TXC_DPD3</option><option value="ENCODER_INTERNAL_UNIPHY2_ENUM_ID2">DPE T2X0_DPE2~T2XC_DPE3</option><option value="ENCODER_INTERNAL_UNIPHY2_ENUM_ID1">DPF T2X0_DPF2~T2XC_DPF3</option></select></div></div></div><div class="row"><div class="col-md-12" id="Button_Source_Type_add_footer" style="display: flex;align-items: center;justify-content: center;"><!--button title="Click to add Source Type"class="btn btn-default" id="Button_Source_Type_add" onclick="button_Source_Type_add(0)" type="button" disabled="">Add</button--></div></div><!-- Connector Type Select Change --><div class="row Connector_Type_padding"id="Connector_Type_add_remove_control_0" ></div><div id="Connector_Add_Area"><!----------------------------------------------------------------------------------------------------------------><!----------------------------------------------------------------------------------------------------------------></div><div class="row"><div class="col-md-12" style="display: flex;align-items: center;justify-content: center;background-color: #a4d9f2;border-radius:12px;box-sizing: border-box;"><button title="Click to add Connector form" type="button" class="btn btn-default" id="Button_Add_Connectors" onclick="Button_Add_Connectors_function()">add </button></div></div><hr></div>');
    } 
    ///if_platform_design_select_HG_or_other_then_Hide_it_or_not
    //Hide
    function  if_platform_design_select_HG_or_other_then_Hide_it() {
      // body...
       var list_this = document.getElementById("if_platform_design_select_HG_or_other_then_Hide_it_or_not");
    
      if (list_this.hasChildNodes()) {
          
        list_this.removeChild(list_this.childNodes[0]);

        
        }
    }

    //reset
    function if_platform_design_select_HG_or_other_then_reset_it() {
      // body...
      $("#if_platform_design_select_HG_or_other_then_Hide_it_or_not").append('<div> <a id="Connectors-tab"href="#Connectors_tab">Connectors</a></div>');
    }














/////////////////////////////////////////////////
//to remove any node 
function Voltage_removethisparentNode(Selected){
  //console.log(Selected.parentNode);
  $(Selected.parentNode).remove();
  refreshAll_added_form_number();
}
 ////////////////////////////////////////////////
 //增加Voltage表單
 var formcount=0;
 function AddVoltageform(){
  formcount++;
$('#AddVoltageForm').append('<div><button title="Click to remove this Voltage Phase controls form" type="button" class="btn btn-default" onclick="Voltage_removethisparentNode(this)" id="removebutton" >Remove</button><div class="row"><div class="col-md-12"><h3><label id="Voltage_Phase_controls_h3_'+formcount+'">SVI2 Voltage / Phase controls</label></h3></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="VR_SVI2_P_N_'+formcount+'">VR SVI2 P/N:</label></div><div class="col-md-6"><input type="text" class="form-control" name="VR_SVI2_P_N_'+formcount+'" id="VR_SVI2_P_N_'+formcount+'"placeholder="Enter your VR SVI2 P/N..." required=""></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Domain_type_'+formcount+'">Domain type:</label></div><div class="col-md-6"><select class="form-control" name="Domain_type_'+formcount+'" id="Domain_type_'+formcount+'" onchange="if_Domain_type_change_then_change_the_ControlAdd_Node(this,'+formcount+')" required="" ><option value="">Select...</option><option value="one_domain" >one domain</option><option value="two_domain">two domain</option></select></div></div><div id="ControlADD_'+formcount+'"></div></div>');

refreshAll_added_form_number();
    //$('#AddVoltageForm').append('<div class="row"><div class="col-md-6"style="display: flex;align-items: left;justify-content: left;"><button type="button" class="btn btn-default" id="removebutton" >remove</button></div><div class="col-md-6"style="display: flex;align-items: left;justify-content: left;"></div></div><div class="row"><div class="col-md-12"><h2><label>Voltage/Phase controls</label></h2></div></div><div class="row"><div class="col-md-5">Control type:</div><div class="col-md-7"><select class="form-control" name="Controltype" id="sel1" required="" onchange="ControltypeSelectChangeForm(this)"><option value="">Select...</option><option value="GPIO" disabled="">GPIO</option><option value="SVID2">SVID2</option><option value="Merged Power Rail">Merged Power Rail</option></select></div></div><div class="row"><div class="col-md-5">Voltage type:</div><div class="col-md-7"><select class="form-control" name="Voltagetype" id="sel1" required=""><option value="">Select...</option><option value="VDDC" >VDDC</option><option value="VDDCI">VDDCI</option><option value="MVDDC">MVDDC</option><option value="MVDDQ">MVDDQ</option><option value="VDDGFX">VDDGFX</option><option value="PCC">PCC</option><option value="MVPP">MVPP</option><option value="LEDDPM">LEDDPM</option><option value="PCC_MVDD">PCC_MVDD</option><option value="PCIE_VDDC">PCIE_VDDC</option><option value="PCIE_VDDR">PCIE_VDDR</option><option value="VDDAN_075">VDDAN_075</option><option value="VDDIO_18">VDDIO_18</option><option value="INP_CUR_WARN_FAULT">INP_CUR_WARN_FAULT</option><option value="VDDCR_HBM">VDDCR_HBM</option><option value="VDDIO_MEM">VDDIO_MEM</option></select></div></div><div id="ControlADD"></div>');
 }
 //刪除form
/*$('#AddVoltageForm').on('click', '#removebutton', function(e) {
    e.preventDefault();
    $(this).parent().remove();
    refreshAll_added_form_number();
});*/

////////////////////////////////
//if_Domain_type_change_then_change_the_ControlAdd_Node
function if_Domain_type_change_then_change_the_ControlAdd_Node(Selected,Voltageform_count) {
  // body...
  if(Selected.value=="one_domain"){
    //1st
    if_Domain_type_Select_null_then_reset_the_ControlAdd_Node(Voltageform_count)
    if_Domain_type_Select_one_domain_then_change_the_ControlAdd_Node(Voltageform_count);
  }else if(Selected.value=="two_domain"){
    //2st
    if_Domain_type_Select_null_then_reset_the_ControlAdd_Node(Voltageform_count)
    if_Domain_type_Select_two_domain_then_change_the_ControlAdd_Node(Voltageform_count);
  }else{
    //reset
    if_Domain_type_Select_null_then_reset_the_ControlAdd_Node(Voltageform_count);

  }
}
  //1st
  function if_Domain_type_Select_one_domain_then_change_the_ControlAdd_Node(Voltageform_count) {
    // body...
    $("#ControlADD_"+Voltageform_count).append('<div><div class="row"><div class="col-md-12"style="text-align:left"><b>1st</b></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Voltagetype_'+Voltageform_count+'_0">Voltage type:</label></div><div class="col-md-6"><select class="form-control" name="Voltagetype_'+Voltageform_count+'_0" id="Voltagetype_'+Voltageform_count+'_0" required=""><option value="">Select...</option><option value="VDDC" >VDDC</option><option value="VDDCI">VDDCI</option><option value="MVDDC">MVDDC</option><option value="MVDDQ">MVDDQ</option><option value="VDDGFX">VDDGFX</option><option value="PCC">PCC</option><option value="MVPP">MVPP</option><option value="LEDDPM">LEDDPM</option><option value="PCC_MVDD">PCC_MVDD</option><option value="PCIE_VDDC">PCIE_VDDC</option><option value="PCIE_VDDR">PCIE_VDDR</option><option value="VDDAN_075">VDDAN_075</option><option value="VDDIO_18">VDDIO_18</option><option value="INP_CUR_WARN_FAULT">INP_CUR_WARN_FAULT</option><option value="VDDCR_HBM">VDDCR_HBM</option><option value="VDDIO_MEM">VDDIO_MEM</option></select></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Boot_up_voltage_in_mV_'+Voltageform_count+'_0">Boot-up voltage in mV:</label></div><div class="col-md-6"><input type="number" step="any" class="form-control" id="Boot_up_voltage_in_mV_'+Voltageform_count+'_0" placeholder="Enter your Boot-up voltage in mV..." name="Boot_up_voltage_in_mV_'+Voltageform_count+'_0" required=""></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Gain_value_'+Voltageform_count+'_0">Gain value:</label></div> <div class="col-md-6"><input class="form-control" type="number" name="Gain_value_'+Voltageform_count+'_0" id="Gain_value_'+Voltageform_count+'_0"placeholder="Enter your Gain value 0~2..."min="0" max="2" step="any" onblur="onTime_check_Gain_value(this)" ></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Merge_power_Yes_No_'+Voltageform_count+'_0">Merge power Yes/No:</label></div><div class="col-md-6"><select class="form-control" name="Merge_power_Yes_No_'+Voltageform_count+'_0" id="Merge_power_Yes_No_'+Voltageform_count+'_0" required="" onchange="Merge_power_Yes_NoSelectChangeForm(this,'+Voltageform_count+',0)"><option value="">Select...</option><option value="Yes">Yes</option><option value="No">No</option></select></div></div><div id="Merge_Power_YN_'+Voltageform_count+'_0"></div></div>');
  //beta2
 /* $("#"+"Gain_value_"+Voltageform_count+"_0").blur(function(){
  onTime_check_Gain_value(this);
} );*/

  }
  //2st
  function if_Domain_type_Select_two_domain_then_change_the_ControlAdd_Node(Voltageform_count) {
    // body...
    $("#ControlADD_"+Voltageform_count).append('<div><div class="row"><div class="col-md-12"style="text-align:left"><b>1st</b></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Voltagetype_'+Voltageform_count+'_0">Voltage type:</label></div><div class="col-md-6"><select class="form-control" name="Voltagetype_'+Voltageform_count+'_0" id="Voltagetype_'+Voltageform_count+'_0" required=""><option value="">Select...</option><option value="VDDC" >VDDC</option><option value="VDDCI">VDDCI</option><option value="MVDDC">MVDDC</option><option value="MVDDQ">MVDDQ</option><option value="VDDGFX">VDDGFX</option><option value="PCC">PCC</option><option value="MVPP">MVPP</option><option value="LEDDPM">LEDDPM</option><option value="PCC_MVDD">PCC_MVDD</option><option value="PCIE_VDDC">PCIE_VDDC</option><option value="PCIE_VDDR">PCIE_VDDR</option><option value="VDDAN_075">VDDAN_075</option><option value="VDDIO_18">VDDIO_18</option><option value="INP_CUR_WARN_FAULT">INP_CUR_WARN_FAULT</option><option value="VDDCR_HBM">VDDCR_HBM</option><option value="VDDIO_MEM">VDDIO_MEM</option></select></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Boot_up_voltage_in_mV_'+Voltageform_count+'_0">Boot-up voltage in mV:</label></div><div class="col-md-6"><input type="number" step="any" class="form-control" id="Boot_up_voltage_in_mV_'+Voltageform_count+'_0" placeholder="Enter your Boot-up voltage in mV..." name="Boot_up_voltage_in_mV_'+Voltageform_count+'_0" required=""></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Gain_value_'+Voltageform_count+'_0">Gain value:</label></div> <div class="col-md-6"><input class="form-control" type="number" name="Gain_value_'+Voltageform_count+'_0" id="Gain_value_'+Voltageform_count+'_0"placeholder="Enter your Gain value 0~2..."min="0" max="2" step="any"  onblur="onTime_check_Gain_value(this)"></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Merge_power_Yes_No_'+Voltageform_count+'_0">Merge power Yes/No:</label></div><div class="col-md-6"><select class="form-control" name="Merge_power_Yes_No_'+Voltageform_count+'_0" id="Merge_power_Yes_No_'+Voltageform_count+'_0" required="" onchange="Merge_power_Yes_NoSelectChangeForm(this,'+Voltageform_count+',0)"><option value="">Select...</option><option value="Yes">Yes</option><option value="No">No</option></select></div></div><div id="Merge_Power_YN_'+Voltageform_count+'_0"></div><div class="row"><div class="col-md-12"style="text-align:left"><b>2nd</b></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Voltagetype_'+Voltageform_count+'_1">Voltage type:</label></div><div class="col-md-6"><select class="form-control" name="Voltagetype_'+Voltageform_count+'_1" id="Voltagetype_'+Voltageform_count+'_1" required=""><option value="">Select...</option><option value="VDDC" >VDDC</option><option value="VDDCI">VDDCI</option><option value="MVDDC">MVDDC</option><option value="MVDDQ">MVDDQ</option><option value="VDDGFX">VDDGFX</option><option value="PCC">PCC</option><option value="MVPP">MVPP</option><option value="LEDDPM">LEDDPM</option><option value="PCC_MVDD">PCC_MVDD</option><option value="PCIE_VDDC">PCIE_VDDC</option><option value="PCIE_VDDR">PCIE_VDDR</option><option value="VDDAN_075">VDDAN_075</option><option value="VDDIO_18">VDDIO_18</option><option value="INP_CUR_WARN_FAULT">INP_CUR_WARN_FAULT</option><option value="VDDCR_HBM">VDDCR_HBM</option><option value="VDDIO_MEM">VDDIO_MEM</option></select></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Boot_up_voltage_in_mV_'+Voltageform_count+'_1">Boot-up voltage in mV:</label></div><div class="col-md-6"><input type="number" step="any" class="form-control" id="Boot_up_voltage_in_mV_'+Voltageform_count+'_1" placeholder="Enter your Boot-up voltage in mV..." name="Boot_up_voltage_in_mV_'+Voltageform_count+'_1" required=""></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Gain_value_'+Voltageform_count+'_1">Gain value:</label></div> <div class="col-md-6"><input class="form-control" type="number" name="Gain_value_'+Voltageform_count+'_1" id="Gain_value_'+Voltageform_count+'_1"placeholder="Enter your Gain value 0~2..."min="0" max="2" step="any"  onblur="onTime_check_Gain_value(this)"></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Merge_power_Yes_No_'+Voltageform_count+'_1">Merge power Yes/No:</label></div><div class="col-md-6"><select class="form-control" name="Merge_power_Yes_No_'+Voltageform_count+'_1" id="Merge_power_Yes_No_'+Voltageform_count+'_1" required="" onchange="Merge_power_Yes_NoSelectChangeForm(this,'+Voltageform_count+',1)"><option value="">Select...</option><option value="Yes">Yes</option><option value="No">No</option></select></div></div><div id="Merge_Power_YN_'+Voltageform_count+'_1"></div></div>');
//beta2
/*$("#"+"Gain_value_"+Voltageform_count+"_0").blur(function(){
  onTime_check_Gain_value(this);
} );
$("#"+"Gain_value_"+Voltageform_count+"_1").blur(function(){
  onTime_check_Gain_value(this);
} );*/
  }
  //reset
  function if_Domain_type_Select_null_then_reset_the_ControlAdd_Node(Voltageform_count) {
    // body...
     var list = document.getElementById("ControlADD_"+Voltageform_count);
    
      if (list.hasChildNodes()) {
        for(var i=0;i<list.childNodes.length;i++){
        list.removeChild(list.childNodes[i]);

        }


        
        }
  }
/*
 //變換Control的項目
function SelectSVID2(formcountInFunc){
  ResestAddControl(formcountInFunc);
  var divControlID="#ControlADD_"+formcountInFunc;
  $(divControlID).append('<div  class="row" ><div class="col-md-6">Boot-up voltage in mV:</div><div class="col-md-6"><input type="number" class="form-control" id="Boot_up_voltage_in_mV_'+formcountInFunc+'" placeholder="Enter your Boot-up voltage in mV..."name="Boot_up_voltage_in_mV_'+formcountInFunc+'"required=""></div></div><div class="row"><div class="col-md-6">Merge power Yes/No:</div><div class="col-md-6"><select class="form-control" name="Merge_power_Yes_No_'+formcountInFunc+'" id="Merge_power_Yes_No_'+formcountInFunc+'" required="" onchange="Merge_power_Yes_NoSelectChangeForm(this,'+formcountInFunc+')"><option value="">Select...</option><option value="Yes">Yes</option><option value="No">No</option></select></div></div><div id="Merge_Power_YN_'+formcountInFunc+'"></div></div>');
}
function SelectMergedPowerRail(formcountInFunc){
  ResestAddControl(formcountInFunc);
  var divControlID="#ControlADD_"+formcountInFunc;
  $(divControlID).append('<div  class="row" ><div class="col-md-6">Merged voltage type:</div><div class="col-md-6"><input class="form-control" name="MergedVoltagetype_'+formcountInFunc+'" id="MergedVoltagetype_'+formcountInFunc+'"placeholder="Enter your Merged voltage type... " required=""></div></div>');
}
 //重置Control type:
 function ResestAddControl(formcountInFunc){
    var  divControlID="ControlADD_"+formcountInFunc;
     var list = document.getElementById(divControlID);
    
    if (list.hasChildNodes()) {
          //console.log(list.childNodes);

        for(var i=0;i<list.childNodes.length;i++){
         
        list.removeChild(list.childNodes[i]);

        }
    }
 } */
 //////////////////////////////////
 //根據Control的選擇修改欄位
 /*function ControltypeSelectChangeForm(SelectOption,formcountInFunc){
  if(SelectOption.value=="GPIO"){

  }else if(SelectOption.value=="SVID2"){
    
    SelectSVID2(formcountInFunc);
  }else if(SelectOption.value=="Merged Power Rail"){
    SelectMergedPowerRail(formcountInFunc)
  }else if(SelectOption.value==""){
    ResestAddControl(formcountInFunc);
    ResestAddControl(formcountInFunc);

  }
 }*/
 //根據Merge power Yes/No變換項目
 function Merge_power_Yes_NoSelectChangeForm(SelectOption,formcountInFunc,domaintype_select_count){
  if(SelectOption.value=="Yes"){
    var divMerge_Power_YN="#Merge_Power_YN_"+formcountInFunc+"_"+domaintype_select_count;
    $(divMerge_Power_YN).append('<div class="row VBIOS_item_padding"><div class="col-md-6"><label for="MergedVoltagetype_'+formcountInFunc+'_'+domaintype_select_count+'">Merge Volatge type:</label></div><div class="col-md-6"><input class="form-control" name="MergedVoltagetype_'+formcountInFunc+'_'+domaintype_select_count+'" id="MergedVoltagetype_'+formcountInFunc+'_'+domaintype_select_count+'" placeholder="Enter your Merged voltage type... " required=""></div>');
  }else{
    ResestMerge_Power_YN(formcountInFunc,domaintype_select_count);
  }
 }
 //重置Merge power Yes/No:
 function ResestMerge_Power_YN(formcountInFunc,domaintype_select_count){
    var divMerge_Power_YN="Merge_Power_YN_"+formcountInFunc+"_"+domaintype_select_count;
     var list = document.getElementById(divMerge_Power_YN);
    
    if (list.hasChildNodes()) {
          //console.log(list.childNodes);

        for(var i=0;i<list.childNodes.length;i++){
         
        list.removeChild(list.childNodes[i]);

        }
    }
 }
  //////////////////////////////////////
  //將addForm的值存入
  function pushAddOption(index,st){
    if(st==0){
      //1st
     Voltagetype.push("[1st]"+document.getElementById("Voltagetype_"+index+"_0").value);
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Voltagetype_"+index+"_0"+'").value="'+document.getElementById("Voltagetype_"+index+"_0").value+'";';   
     Voltagetype_database_id.push(["Voltagetype_"+index+"_0"]);
     Boot_up_voltage_in_mV.push("[1st]"+document.getElementById("Boot_up_voltage_in_mV_"+index+"_0").value);
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Boot_up_voltage_in_mV_"+index+"_0"+'").value="'+document.getElementById("Boot_up_voltage_in_mV_"+index+"_0").value+'";';   
     Boot_up_voltage_in_mV_database_id.push(["Boot_up_voltage_in_mV_"+index+"_0"]);
     Gain_value.push("[1st]"+document.getElementById("Gain_value_"+index+"_0").value);
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Gain_value_"+index+"_0"+'").value="'+document.getElementById("Gain_value_"+index+"_0").value+'";';   
     Gain_value_database_id.push(["Gain_value_"+index+"_0"]);
     Merge_power_Yes_No.push("[1st]"+document.getElementById("Merge_power_Yes_No_"+index+"_0").value);
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Merge_power_Yes_No_"+index+"_0"+'").value="'+document.getElementById("Merge_power_Yes_No_"+index+"_0").value+'";';   
     Merge_power_Yes_No_database_id.push(["Merge_power_Yes_No_"+index+"_0"]);
     if(document.getElementById("Merge_power_Yes_No_"+index+"_0").value=="No"){
      MergedVoltagetype.push("[1st]Default setting");
      MergedVoltagetype_database_id.push(["[1st]Default setting"]);
     }else{
      MergedVoltagetype.push("[1st]"+document.getElementById("MergedVoltagetype_"+index+"_0").value);
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+"MergedVoltagetype_"+index+"_0"+'").value="'+document.getElementById("MergedVoltagetype_"+index+"_0").value+'";';   
      MergedVoltagetype_database_id.push(["MergedVoltagetype_"+index+"_0"]);
     }
    }else{
      //1st//2nd
     Voltagetype.push("[1st]"+document.getElementById("Voltagetype_"+index+"_0").value+"[2nd]"+document.getElementById("Voltagetype_"+index+"_1").value);
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Voltagetype_"+index+"_0"+'").value="'+document.getElementById("Voltagetype_"+index+"_0").value+'";';   
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Voltagetype_"+index+"_1"+'").value="'+document.getElementById("Voltagetype_"+index+"_1").value+'";';   
     Voltagetype_database_id.push(["Voltagetype_"+index+"_0","Voltagetype_"+index+"_1"]);
     Boot_up_voltage_in_mV.push("[1st]"+document.getElementById("Boot_up_voltage_in_mV_"+index+"_0").value+"[2nd]"+document.getElementById("Boot_up_voltage_in_mV_"+index+"_1").value);
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Boot_up_voltage_in_mV_"+index+"_0"+'").value="'+document.getElementById("Boot_up_voltage_in_mV_"+index+"_0").value+'";';   
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Boot_up_voltage_in_mV_"+index+"_1"+'").value="'+document.getElementById("Boot_up_voltage_in_mV_"+index+"_1").value+'";';   
     Boot_up_voltage_in_mV_database_id.push(["Boot_up_voltage_in_mV_"+index+"_0","Boot_up_voltage_in_mV_"+index+"_1"]);
     Gain_value.push("[1st]"+document.getElementById("Gain_value_"+index+"_0").value+"[2nd]"+document.getElementById("Gain_value_"+index+"_1").value);
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Gain_value_"+index+"_0"+'").value="'+document.getElementById("Gain_value_"+index+"_0").value+'";';   
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Gain_value_"+index+"_1"+'").value="'+document.getElementById("Gain_value_"+index+"_1").value+'";';   
     Gain_value_database_id.push(["Gain_value_"+index+"_0","Gain_value_"+index+"_1"]);
     Merge_power_Yes_No.push("[1st]"+document.getElementById("Merge_power_Yes_No_"+index+"_0").value+"[2nd]"+document.getElementById("Merge_power_Yes_No_"+index+"_1").value);
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Merge_power_Yes_No_"+index+"_0"+'").value="'+document.getElementById("Merge_power_Yes_No_"+index+"_0").value+'";';   
     Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Merge_power_Yes_No_"+index+"_1"+'").value="'+document.getElementById("Merge_power_Yes_No_"+index+"_1").value+'";';   
     Merge_power_Yes_No_database_id.push(["Merge_power_Yes_No_"+index+"_0","Merge_power_Yes_No_"+index+"_1"]);
     var str_MergedVoltagetype="";
     if(document.getElementById("Merge_power_Yes_No_"+index+"_0").value=="No"){
      str_MergedVoltagetype="[1st]Default setting";

     }else{
      str_MergedVoltagetype="[1st]"+document.getElementById("MergedVoltagetype_"+index+"_0").value;
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+"MergedVoltagetype_"+index+"_0"+'").value="'+document.getElementById("MergedVoltagetype_"+index+"_0").value+'";';   
     }
     if(document.getElementById("Merge_power_Yes_No_"+index+"_1").value=="No"){
      str_MergedVoltagetype=str_MergedVoltagetype+"[2nd]Default setting";

     }else{
      str_MergedVoltagetype=str_MergedVoltagetype+"[2nd]"+document.getElementById("MergedVoltagetype_"+index+"_1").value;
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+"MergedVoltagetype_"+index+"_1"+'").value="'+document.getElementById("MergedVoltagetype_"+index+"_1").value+'";';   
     }
     MergedVoltagetype.push(str_MergedVoltagetype);
     
     
     MergedVoltagetype_database_id.push(["MergedVoltagetype_"+index+"_0","MergedVoltagetype_"+index+"_1"]);
    }  
  }
  function pushAddFormValue(){
    ///Voltage form 
    for(var i=0;i<=formcount;i++){
      var formIndex_push=document.getElementById("Domain_type_"+i);
      if(formIndex_push==null){

      }else {
        var Domain_type_id_index_length=formIndex_push.length;
        ///push Voltagetype
        Domain_type.push(formIndex_push.value);
        Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Domain_type_"+i+'").value="'+document.getElementById("Domain_type_"+i).value+'";';   
        Domain_type_database_id.push("Domain_type_"+i);
        var VR_SVI2_P_N_id=document.getElementById("VR_SVI2_P_N_"+i);
        VR_SVI2_P_N.push(VR_SVI2_P_N_id.value);
        Database_id_value_String=Database_id_value_String+'document.getElementById("'+"VR_SVI2_P_N_"+i+'").value="'+document.getElementById("VR_SVI2_P_N_"+i).value+'";';   
        VR_SVI2_P_N_database_id.push("VR_SVI2_P_N_"+i);
        if(formIndex_push.value=="one_domain"){
        pushAddOption(i,0);

        }else if(formIndex_push.value=="two_domain"){
        pushAddOption(i,1);

        }
      }
    }
  }
  function push_N_CheckBox(Array_Name,id){
    
    if($(id).prop("checked")){
      Array_Name.push(document.getElementById("DISPLAYPORT_CheckBox_MST_and_HBR2_enable_"+Count).value);
    }else{
      Array_Name.push("Disable");
    }
  }

  function push_N_Select(id,length,arrayName){
    for(var i=1;i<length;i++){
      if(id[i].selected){
        arrayName.push(id[i].value);
        break;
      }
    }
  }
  function push_N_Text(id,arrayName){
    arrayName.push(id.value);
  }
  function push_N_InnerHTML(id,arrayName){
    arrayName.push(id.innerHTML);
  }
   function myrefresh(){
      window.location.reload();
 }

///////////////////////////////////////////
//MemorymoduleSelectChangeForm//根據選擇更換項目
function MemorymoduleSelectChangeForm(Selected){
  if(Selected.value==""){
    ResestAddMemory_module_selection_add();
    if_Memory_module_selection_select_other_then_reset_this();
    if_Memory_module_selection_select_other_then_reset_block_this();
  }else if(Selected.value=="Auto"){
    ResestAddMemory_module_selection_add();

    if_Memory_module_selection_select_other_then_reset_this();
    if_Memory_module_selection_select_other_then_reset_block_this();
    
    if_Memory_module_selection_select_Auto_then_remove_this();

   // ResestAddMemory_module_selection_add();
  }else if(Selected.value=="MEMORY_MODULE_SELECT_FROM_STRAP_PIN"){
    ResestAddMemory_module_selection_add();
    SelectMEMORY_MODULE_SELECT_FROM_STRAP_PIN();
    if_Memory_module_selection_select_other_then_reset_this();
    if_Memory_module_selection_select_other_then_reset_block_this();
  }else if(Selected.value=="MLPS_detection"){
     ResestAddMemory_module_selection_add();
    if_Memory_module_selection_select_other_then_reset_this();
    if_Memory_module_selection_select_other_then_reset_block_this();
  }
}

////////////////////
//選擇MEMORY_MODULE_SELECT_FROM_STRAP_PIN產生Memory module detection GPIO pin assignment
function SelectMEMORY_MODULE_SELECT_FROM_STRAP_PIN(){
  var divMemory_module_selection_addID="#Memory_module_selection_add";
  $(divMemory_module_selection_addID).append('<div class="col-md-12" style="margin-bottom:1%;"><p class="text-center">Memory module detection GPIO pin assignment</p><div class="row" id="Memory_module_detection_GPIO_pin_assignment_N_item_add" ><div class="col-md-12 Memory_module_detection_GPIO_pin_assignment_padding" ><!--<button class="btn btn-default col-md-2" id="Button_Memory_module_detection_GPIO_pin_assignment_remove" onclick="Button_Memory_module_detection_GPIO_pin_assignment_remove_removethisparentNode(this)" type="button">Remove</button>--><div class="row Memory_module_detection_GPIO_pin_assignment_item_padding"><div class="col-md-6"><span style="font-size:medium;margin-top: 2.5%;text-align: center;" id="span_bit_count_0"><label for="Select_Memory_module_detection_GPIO_pin_assignment_0">bit 0</label></span></div><div class="col-md-6"><select class="form-control" name="Select_Memory_module_detection_GPIO_pin_assignment_0" id="Select_Memory_module_detection_GPIO_pin_assignment_0"onchange="onTime_check_all_GPIO_pin_repeat_or_not('+bit_0_to_3+',this)" required=""><option value="">Select...</option><option value="GPIO_0">GPIO_0</option><option value="GPIO_1">GPIO_1</option><option value="GPIO_2">GPIO_2</option><option value="GPIO_5">GPIO_5</option><option value="GPIO_6">GPIO_6</option><option value="GPIO_7_BLON">GPIO_7_BLON</option><option value="GPIO_8_ROMSO">GPIO_8_ROMSO</option><option value="GPIO_9_ROMSI">GPIO_9_ROMSI</option><option value="GPIO_10_ROMSCK">GPIO_10_ROMSCK</option><option value="GPIO_11">GPIO_11</option><option value="GPIO_12">GPIO_12</option><option value="GPIO_13">GPIO_13</option><option value="GPIO_14_HPD2">GPIO_14_HPD2</option><option value="GPIO_15_PWRCNTL_0">GPIO_15_PWRCNTL_0</option><option value="GPIO_16_SSIN">GPIO_16_SSIN</option><option value="GPIO_17_THERMAL_INT">GPIO_17_THERMAL_INT</option><option value="GPIO_18_HPD3">GPIO_18_HPD3</option><option value="GPIO_19_CTFB">GPIO_19_CTFB</option><option value="GPIO_20_PWRCNTL_1">GPIO_20_PWRCNTL_1</option><option value="GPIO_21">GPIO_21</option><option value="GPIO_22_ROMCSB">GPIO_22_ROMCSB</option><option value="GPIO_28">GPIO_28</option><option value="GPIO_29">GPIO_29</option><option value="GPIO_30">GPIO_30</option><option value="DVPCLK">DVPCLK</option><option value="DVPCNTL_0">DVPCNTL_0</option><option value="DVPCNTL_1">DVPCNTL_1</option><option value="DVPCNTL_2">DVPCNTL_2</option><option value="DVPCNTL_MVP_0">DVPCNTL_MVP_0</option><option value="DVPCNTL_MVP_1">DVPCNTL_MVP_1</option><option value="DVPDATA_0">DVPDATA_0</option><option value="DVPDATA_1">DVPDATA_1</option><option value="DVPDATA_2">DVPDATA_2</option><option value="DVPDATA_3">DVPDATA_3</option><option value="DVPDATA_4">DVPDATA_4</option><option value="DVPDATA_5">DVPDATA_5</option><option value="DVPDATA_6">DVPDATA_6</option><option value="DVPDATA_7">DVPDATA_7</option><option value="DVPDATA_8">DVPDATA_8</option><option value="DVPDATA_9">DVPDATA_9</option><option value="DVPDATA_10">DVPDATA_10</option><option value="DVPDATA_11">DVPDATA_11</option><option value="DVPDATA_12">DVPDATA_12</option><option value="DVPDATA_13">DVPDATA_13</option><option value="DVPDATA_14">DVPDATA_14</option><option value="DVPDATA_15">DVPDATA_15</option><option value="DVPDATA_16">DVPDATA_16</option><option value="DVPDATA_17">DVPDATA_17</option><option value="DVPDATA_18">DVPDATA_18</option><option value="DVPDATA_19">DVPDATA_19</option><option value="DVPDATA_20">DVPDATA_20</option><option value="DVPDATA_21">DVPDATA_21</option><option value="DVPDATA_22">DVPDATA_22</option><option value="DVPDATA_23">DVPDATA_23</option><option value="GENERICA">GENERICA</option><option value="GENERICB">GENERICB</option><option value="GENERICC">GENERICC</option><option value="GENERICD">GENERICD</option><option value="GENERICE_HPD4">GENERICE_HPD4</option><option value="GENERICF_HPD5">GENERICF_HPD5</option><option value="GENERICG_HDP6">GENERICG_HDP6</option><option value="GENLK_VSYNC">GENLK_VSYNC</option><option value="HSYNC">HSYNC</option><option value="VSYNC">VSYNC</option><option value="VARY_BL">VARY_BL</option><option value="DIGON">DIGON</option><option value="GENLK_CLK">GENLK_CLK</option><option value="HPD1">HPD1</option></select></div></div><div class="row Memory_module_detection_GPIO_pin_assignment_item_padding"><div class="col-md-6"><span style="font-size:medium;margin-top: 2.5%;text-align: center;" id="span_bit_count_1"><label for="Select_Memory_module_detection_GPIO_pin_assignment_1">bit 1</label></span></div><div class="col-md-6"><select class="form-control" name="Select_Memory_module_detection_GPIO_pin_assignment_1" id="Select_Memory_module_detection_GPIO_pin_assignment_1"onchange="onTime_check_all_GPIO_pin_repeat_or_not('+bit_0_to_3+',this)" required=""><option value="">Select...</option><option value="GPIO_0">GPIO_0</option><option value="GPIO_1">GPIO_1</option><option value="GPIO_2">GPIO_2</option><option value="GPIO_5">GPIO_5</option><option value="GPIO_6">GPIO_6</option><option value="GPIO_7_BLON">GPIO_7_BLON</option><option value="GPIO_8_ROMSO">GPIO_8_ROMSO</option><option value="GPIO_9_ROMSI">GPIO_9_ROMSI</option><option value="GPIO_10_ROMSCK">GPIO_10_ROMSCK</option><option value="GPIO_11">GPIO_11</option><option value="GPIO_12">GPIO_12</option><option value="GPIO_13">GPIO_13</option><option value="GPIO_14_HPD2">GPIO_14_HPD2</option><option value="GPIO_15_PWRCNTL_0">GPIO_15_PWRCNTL_0</option><option value="GPIO_16_SSIN">GPIO_16_SSIN</option><option value="GPIO_17_THERMAL_INT">GPIO_17_THERMAL_INT</option><option value="GPIO_18_HPD3">GPIO_18_HPD3</option><option value="GPIO_19_CTFB">GPIO_19_CTFB</option><option value="GPIO_20_PWRCNTL_1">GPIO_20_PWRCNTL_1</option><option value="GPIO_21">GPIO_21</option><option value="GPIO_22_ROMCSB">GPIO_22_ROMCSB</option><option value="GPIO_28">GPIO_28</option><option value="GPIO_29">GPIO_29</option><option value="GPIO_30">GPIO_30</option><option value="DVPCLK">DVPCLK</option><option value="DVPCNTL_0">DVPCNTL_0</option><option value="DVPCNTL_1">DVPCNTL_1</option><option value="DVPCNTL_2">DVPCNTL_2</option><option value="DVPCNTL_MVP_0">DVPCNTL_MVP_0</option><option value="DVPCNTL_MVP_1">DVPCNTL_MVP_1</option><option value="DVPDATA_0">DVPDATA_0</option><option value="DVPDATA_1">DVPDATA_1</option><option value="DVPDATA_2">DVPDATA_2</option><option value="DVPDATA_3">DVPDATA_3</option><option value="DVPDATA_4">DVPDATA_4</option><option value="DVPDATA_5">DVPDATA_5</option><option value="DVPDATA_6">DVPDATA_6</option><option value="DVPDATA_7">DVPDATA_7</option><option value="DVPDATA_8">DVPDATA_8</option><option value="DVPDATA_9">DVPDATA_9</option><option value="DVPDATA_10">DVPDATA_10</option><option value="DVPDATA_11">DVPDATA_11</option><option value="DVPDATA_12">DVPDATA_12</option><option value="DVPDATA_13">DVPDATA_13</option><option value="DVPDATA_14">DVPDATA_14</option><option value="DVPDATA_15">DVPDATA_15</option><option value="DVPDATA_16">DVPDATA_16</option><option value="DVPDATA_17">DVPDATA_17</option><option value="DVPDATA_18">DVPDATA_18</option><option value="DVPDATA_19">DVPDATA_19</option><option value="DVPDATA_20">DVPDATA_20</option><option value="DVPDATA_21">DVPDATA_21</option><option value="DVPDATA_22">DVPDATA_22</option><option value="DVPDATA_23">DVPDATA_23</option><option value="GENERICA">GENERICA</option><option value="GENERICB">GENERICB</option><option value="GENERICC">GENERICC</option><option value="GENERICD">GENERICD</option><option value="GENERICE_HPD4">GENERICE_HPD4</option><option value="GENERICF_HPD5">GENERICF_HPD5</option><option value="GENERICG_HDP6">GENERICG_HDP6</option><option value="GENLK_VSYNC">GENLK_VSYNC</option><option value="HSYNC">HSYNC</option><option value="VSYNC">VSYNC</option><option value="VARY_BL">VARY_BL</option><option value="DIGON">DIGON</option><option value="GENLK_CLK">GENLK_CLK</option><option value="HPD1">HPD1</option></select></div></div><div class="row Memory_module_detection_GPIO_pin_assignment_item_padding"><div class="col-md-6"><span style="font-size:medium;margin-top: 2.5%;text-align: center;" id="span_bit_count_2"><label for="Select_Memory_module_detection_GPIO_pin_assignment_2">bit 2</label></span></div><div class="col-md-6"><select class="form-control" name="Select_Memory_module_detection_GPIO_pin_assignment_2" id="Select_Memory_module_detection_GPIO_pin_assignment_2"onchange="onTime_check_all_GPIO_pin_repeat_or_not('+bit_0_to_3+',this)" required=""><option value="">Select...</option><option value="GPIO_0">GPIO_0</option><option value="GPIO_1">GPIO_1</option><option value="GPIO_2">GPIO_2</option><option value="GPIO_5">GPIO_5</option><option value="GPIO_6">GPIO_6</option><option value="GPIO_7_BLON">GPIO_7_BLON</option><option value="GPIO_8_ROMSO">GPIO_8_ROMSO</option><option value="GPIO_9_ROMSI">GPIO_9_ROMSI</option><option value="GPIO_10_ROMSCK">GPIO_10_ROMSCK</option><option value="GPIO_11">GPIO_11</option><option value="GPIO_12">GPIO_12</option><option value="GPIO_13">GPIO_13</option><option value="GPIO_14_HPD2">GPIO_14_HPD2</option><option value="GPIO_15_PWRCNTL_0">GPIO_15_PWRCNTL_0</option><option value="GPIO_16_SSIN">GPIO_16_SSIN</option><option value="GPIO_17_THERMAL_INT">GPIO_17_THERMAL_INT</option><option value="GPIO_18_HPD3">GPIO_18_HPD3</option><option value="GPIO_19_CTFB">GPIO_19_CTFB</option><option value="GPIO_20_PWRCNTL_1">GPIO_20_PWRCNTL_1</option><option value="GPIO_21">GPIO_21</option><option value="GPIO_22_ROMCSB">GPIO_22_ROMCSB</option><option value="GPIO_28">GPIO_28</option><option value="GPIO_29">GPIO_29</option><option value="GPIO_30">GPIO_30</option><option value="DVPCLK">DVPCLK</option><option value="DVPCNTL_0">DVPCNTL_0</option><option value="DVPCNTL_1">DVPCNTL_1</option><option value="DVPCNTL_2">DVPCNTL_2</option><option value="DVPCNTL_MVP_0">DVPCNTL_MVP_0</option><option value="DVPCNTL_MVP_1">DVPCNTL_MVP_1</option><option value="DVPDATA_0">DVPDATA_0</option><option value="DVPDATA_1">DVPDATA_1</option><option value="DVPDATA_2">DVPDATA_2</option><option value="DVPDATA_3">DVPDATA_3</option><option value="DVPDATA_4">DVPDATA_4</option><option value="DVPDATA_5">DVPDATA_5</option><option value="DVPDATA_6">DVPDATA_6</option><option value="DVPDATA_7">DVPDATA_7</option><option value="DVPDATA_8">DVPDATA_8</option><option value="DVPDATA_9">DVPDATA_9</option><option value="DVPDATA_10">DVPDATA_10</option><option value="DVPDATA_11">DVPDATA_11</option><option value="DVPDATA_12">DVPDATA_12</option><option value="DVPDATA_13">DVPDATA_13</option><option value="DVPDATA_14">DVPDATA_14</option><option value="DVPDATA_15">DVPDATA_15</option><option value="DVPDATA_16">DVPDATA_16</option><option value="DVPDATA_17">DVPDATA_17</option><option value="DVPDATA_18">DVPDATA_18</option><option value="DVPDATA_19">DVPDATA_19</option><option value="DVPDATA_20">DVPDATA_20</option><option value="DVPDATA_21">DVPDATA_21</option><option value="DVPDATA_22">DVPDATA_22</option><option value="DVPDATA_23">DVPDATA_23</option><option value="GENERICA">GENERICA</option><option value="GENERICB">GENERICB</option><option value="GENERICC">GENERICC</option><option value="GENERICD">GENERICD</option><option value="GENERICE_HPD4">GENERICE_HPD4</option><option value="GENERICF_HPD5">GENERICF_HPD5</option><option value="GENERICG_HDP6">GENERICG_HDP6</option><option value="GENLK_VSYNC">GENLK_VSYNC</option><option value="HSYNC">HSYNC</option><option value="VSYNC">VSYNC</option><option value="VARY_BL">VARY_BL</option><option value="DIGON">DIGON</option><option value="GENLK_CLK">GENLK_CLK</option><option value="HPD1">HPD1</option></select></div></div></div></div></div>');
}

/////////////////////
//選擇Select...或Auto將Memory module detection GPIO pin assignment移除
function ResestAddMemory_module_selection_add(){
  MODULE_SELECT_FROM_STRAP_PIN_item_count=1;
 
    var divMemory_module_selection_addID="Memory_module_selection_add";
    var list = document.getElementById(divMemory_module_selection_addID);
    if (list.hasChildNodes()) {
        list.removeChild(list.childNodes[0]);
    }
 }
 //選擇Auto移除Memory module ID //if_Memory_module_selection_select_Auto_then_change_this
 function if_Memory_module_selection_select_Auto_then_remove_this(){
  var divif_Memory_module_selection_select_Auto_then_change_this_id="if_Memory_module_selection_select_Auto_then_change_this";
  var list=document.getElementById(divif_Memory_module_selection_select_Auto_then_change_this_id);
  if (list.hasChildNodes()) {
        list.removeChild(list.childNodes[0]);
    }
 }
 function if_Memory_module_selection_select_other_then_reset_this(){
  var divif_Memory_module_selection_select_other_then_reset_this_id="Insert_Memory_Module_Information_block_add";
  var list=document.getElementById(divif_Memory_module_selection_select_other_then_reset_this_id);
  for(var j=0;j<100;j++){
    if (list.hasChildNodes()) {
    for(var i=0;i<list.childNodes.length;i++){
        list.removeChild(list.childNodes[i]);

    }
    }
  }
  

 }
 function if_Memory_module_selection_select_other_then_reset_block_this(){
  $("#Insert_Memory_Module_Information_block_add").append('<div class="col-md-12"><p class="text-center" id="Memory_module_information_block_p_0">Memory module information block</p><div id="if_Memory_module_selection_select_Auto_then_change_this"><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Memory_module_ID_0">Memory module ID:</label></div><div class="col-md-6" style="background-color: #8accea;"><input type="number" step="1" max="7" min="0" class="form-control" id="Memory_module_ID_0" name="Memory_module_ID_0" placeholder="Enter your Memory module ID(0~7)..." onblur="onTime_check_Memory_module_ID(this)" required=""></div></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Select_Memory_module_information_block_0">Memory Module vendor:</label></div><div class="col-md-6" style="background-color: #8accea;"><select class="form-control" name="Select_Memory_module_information_block_0" id="Select_Memory_module_information_block_0" required=""><option value="">Select...</option><option value="HYNIX">HYNIX</option><option value="PALLADIUM">PALLADIUM</option><option value="QIMONDA">QIMONDA</option><option value="SAMSUNG">SAMSUNG</option><option value="AUTODETECT">AUTODETECT</option><option value="WINBOND">WINBOND</option><option value="NANYA">NANYA</option><option value="ELIXIR">ELIXIR</option><option value="ELPIDA">ELPIDA</option><option value="MEZZA">MEZZA</option><option value="MICRON">MICRON</option><option value="PROMOS">PROMOS</option><option value="AMD">AMD</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Module_vendor_P_N_0">Memory Module vendor P/N:</label></div><div class="col-md-6" style="background-color: #8accea;"><input type="text" class="form-control" id="Module_vendor_P_N_0" placeholder="Enter your Module vendor P/N..." name="Module_vendor_P_N_0" required=""></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Memory_Voltage_V_0">Memory Voltage(V):</label></div><div class="col-md-6" style="background-color: #8accea;"><input type="number" step="any" class="form-control" id="Memory_Voltage_V_0" name="Memory_Voltage_V_0" placeholder="Enter your Memory Voltage..." required=""></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Select_Module_density_0">Memory Module density:</label></div><div class="col-md-6" style="background-color: #8accea;"><select class="form-control" name="Select_Module_density_0" id="Select_Module_density_0" required=""><option value="">Select...</option><option value="16Mx32">16Mx32</option><option value="32Mx32">32Mx32</option><option value="8Mx32">8Mx32</option><option value="128Mx8">128Mx8</option><option value="16Mx16">16Mx16</option><option value="32Mx16">32Mx16</option><option value="64Mx16">64Mx16</option><option value="64Mx8">64Mx8</option><option value="128Mx16">128Mx16</option><option value="256Mx16">256Mx16</option><option value="256Mx8">256Mx8</option><option value="512Mx16">512Mx16</option><option value="512Mx8">512Mx8</option><option value="128Mx32">128Mx32</option><option value="256Mx32">256Mx32</option><option value="64Mx32">64Mx32</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;">Memory Module channel size:</div><div class="col-md-6" style="background-color: #8accea;"><select disabled="" id="Select_Module_channel_size_0" name="Select_Module_channel_size_0" class="form-control" required=""><option value="">Select...</option><option selected="" value="CHANNEL_32BIT">32-Bit channel</option><option value="CHANNEL_64BIT">64-Bit channel</option><option value="CHANNEL_128BIT">128-Bit channel</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Select_Number_of_channels_0">Number of channels:</label></div><div class="col-md-6" style="background-color: #8accea;"><select class="form-control" name="Select_Number_of_channels_0" id="Select_Number_of_channels_0" onchange="onchange_Calculation_Memory_Data_width(this,0)" required=""><option value="">Select...</option><option value="EIGHT_CHANNEL">Eight Channel</option><option value="FOUR_CHANNEL">Four Channel</option><option value="TWO_CHANNEL">Two Channel</option><option value="ONE_CHANNEL">One Channel</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;">Memory Data width:</div><div class="col-md-6" style="background-color: #8accea;"><label class="form-control" id="Memory_Data_width_0" style="margin:0;" name="Memory_Data_width_0">0 bit</label></div></div><div class="row" style="background-color: #8accea;margin-bottom: 2.5%;"><div class="col-md-6" style="background-color: #8accea;margin-bottom: 1.5%;"><label for="Select_Rank_0">Rank:</label></div><div class="col-md-6" style="background-color: #8accea;margin-bottom: 1.5%;"><select class="form-control" name="Select_Rank_0" id="Select_Rank_0" required=""><option value="">Select...</option><option value="SINGLE_RANK">SINGLE</option><option value="DUAL_RANK">DUAL</option></select></div></div></div>');
//beta
/*$("#Memory_module_ID_0").blur(function(){
  onTime_check_Memory_module_ID(this);
} );*/
 }
///////////////////////////////////////
//選擇了MEMORY_MODULE_SELECT_FROM_STRAP_PIN,內部有一個Item的增減項目
var MODULE_SELECT_FROM_STRAP_PIN_item_count=1; 
//增
function AddMEMORY_MODULE_SELECT_FROM_STRAP_PIN_item(){
 

  $('#Memory_module_detection_GPIO_pin_assignment_N_item_add').append('<div class="col-md-12" style="display: flex;align-items: center;justify-content: center;"><button class="btn btn-default col-md-2" id="Button_Memory_module_detection_GPIO_pin_assignment_remove" onclick="Button_Memory_module_detection_GPIO_pin_assignment_remove_removethisparentNode(this)" type="button">Remove</button><div class="col-md-5" id="Div_Select_Memory_module_detection_GPIO_pin_assignment"><select class="form-control" name="Select_Memory_module_detection_GPIO_pin_assignment_'+MODULE_SELECT_FROM_STRAP_PIN_item_count+'" id="Select_Memory_module_detection_GPIO_pin_assignment_ '+MODULE_SELECT_FROM_STRAP_PIN_item_count+' " required=""><option value="">Select...</option><option value="GPIO_0">GPIO_0</option><option value="GPIO_1">GPIO_1</option><option value="GPIO_2">GPIO_2</option><option value="GPIO_5">GPIO_5</option><option value="GPIO_6">GPIO_6</option><option value="GPIO_7_BLON">GPIO_7_BLON</option><option value="GPIO_8_ROMSO">GPIO_8_ROMSO</option><option value="GPIO_9_ROMSI">GPIO_9_ROMSI</option><option value="GPIO_10_ROMSCK">GPIO_10_ROMSCK</option><option value="GPIO_11">GPIO_11</option><option value="GPIO_12">GPIO_12</option><option value="GPIO_13">GPIO_13</option><option value="GPIO_14_HPD2">GPIO_14_HPD2</option><option value="GPIO_15_PWRCNTL_0">GPIO_15_PWRCNTL_0</option><option value="GPIO_16_SSIN">GPIO_16_SSIN</option><option value="GPIO_17_THERMAL_INT">GPIO_17_THERMAL_INT</option><option value="GPIO_18_HPD3">GPIO_18_HPD3</option><option value="GPIO_19_CTFB">GPIO_19_CTFB</option><option value="GPIO_20_PWRCNTL_1">GPIO_20_PWRCNTL_1</option><option value="GPIO_21">GPIO_21</option><option value="GPIO_22_ROMCSB">GPIO_22_ROMCSB</option><option value="GPIO_28">GPIO_28</option><option value="GPIO_29">GPIO_29</option><option value="GPIO_30">GPIO_30</option><option value="DVPCLK">DVPCLK</option><option value="DVPCNTL_0">DVPCNTL_0</option><option value="DVPCNTL_1">DVPCNTL_1</option><option value="DVPCNTL_2">DVPCNTL_2</option><option value="DVPCNTL_MVP_0">DVPCNTL_MVP_0</option><option value="DVPCNTL_MVP_1">DVPCNTL_MVP_1</option><option value="DVPDATA_0">DVPDATA_0</option><option value="DVPDATA_1">DVPDATA_1</option><option value="DVPDATA_2">DVPDATA_2</option><option value="DVPDATA_3">DVPDATA_3</option><option value="DVPDATA_4">DVPDATA_4</option><option value="DVPDATA_5">DVPDATA_5</option><option value="DVPDATA_6">DVPDATA_6</option><option value="DVPDATA_7">DVPDATA_7</option><option value="DVPDATA_8">DVPDATA_8</option><option value="DVPDATA_9">DVPDATA_9</option><option value="DVPDATA_10">DVPDATA_10</option><option value="DVPDATA_11">DVPDATA_11</option><option value="DVPDATA_12">DVPDATA_12</option><option value="DVPDATA_13">DVPDATA_13</option><option value="DVPDATA_14">DVPDATA_14</option><option value="DVPDATA_15">DVPDATA_15</option><option value="DVPDATA_16">DVPDATA_16</option><option value="DVPDATA_17">DVPDATA_17</option><option value="DVPDATA_18">DVPDATA_18</option><option value="DVPDATA_19">DVPDATA_19</option><option value="DVPDATA_20">DVPDATA_20</option><option value="DVPDATA_21">DVPDATA_21</option><option value="DVPDATA_22">DVPDATA_22</option><option value="DVPDATA_23">DVPDATA_23</option><option value="GENERICA">GENERICA</option><option value="GENERICB">GENERICB</option><option value="GENERICC">GENERICC</option><option value="GENERICD">GENERICD</option><option value="GENERICE_HPD4">GENERICE_HPD4</option><option value="GENERICF_HPD5">GENERICF_HPD5</option><option value="GENERICG_HDP6">GENERICG_HDP6</option><option value="GENLK_VSYNC">GENLK_VSYNC</option><option value="HSYNC">HSYNC</option><option value="VSYNC">VSYNC</option><option value="VARY_BL">VARY_BL</option><option value="DIGON">DIGON</option><option value="GENLK_CLK">GENLK_CLK</option><option value="HPD1">HPD1</option></select></div><div class="col-md-3" style="max-width: 60%"><p class="text-center" style="font-size:medium;margin-top: 2.5%;" id="span_bit_count_'+MODULE_SELECT_FROM_STRAP_PIN_item_count+'">bit 0</p></div><div class="col-md-4"><input style="max-width: 70%"  type="number" step="any" class="form-control "id="Text_bit_count_'+MODULE_SELECT_FROM_STRAP_PIN_item_count+'" placeholder="Enter 0 or 1..." name="Text_bit_count_'+MODULE_SELECT_FROM_STRAP_PIN_item_count+'" required=""></div></div>'); 
   MODULE_SELECT_FROM_STRAP_PIN_item_count++;
   refresh_bit_item_number();
  }
////////////////////////////////////////
//減

/*$('.col-md-12').on('click', '#Button_Memory_module_detection_GPIO_pin_assignment_remove', function(e) {
    e.preventDefault();
    
    
    $(this).parent().remove();
    refresh_bit_item_number();
});*/
function Button_Memory_module_detection_GPIO_pin_assignment_remove_removethisparentNode(Selected){
  
  $(Selected.parentNode).remove();
   refresh_bit_item_number();
  
}
///////////////////////////////////
//if_Memory_type_HBM_others_selected_then_change_this_node(this)
function if_Memory_type_HBM_others_selected_then_change_this_node(Selected) {
  if(Selected.value=="HBM" ||Selected.value=="HBM2" ||Selected.value=="" ){
    //remove block
    if_Memory_type_HBM_selected_then_remove();
    
  }else{
    //reset
      if_Memory_type_HBM_selected_then_remove();
      if_Memory_type_HBM_selected_then_reset();
  }
}
  //remove
  function if_Memory_type_HBM_selected_then_remove() {
    var list=document.getElementById("if_Memory_type_HBM_selected_then_remove_this_node");
    if(list.hasChildNodes()){
      list.removeChild(list.childNodes[0]);
    }
  }

  //reset
  function if_Memory_type_HBM_selected_then_reset() {
    $("#if_Memory_type_HBM_selected_then_remove_this_node").append('<div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Memory_module_selection">Memory module selection:</label></div><div class="col-md-6"><select class="form-control" name="Memory_module_selection" id="Memory_module_selection"required="" onchange="MemorymoduleSelectChangeForm(this)"><option value="">Select...</option>       <option value="Auto">Auto</option><option value="MEMORY_MODULE_SELECT_FROM_STRAP_PIN">GPIO pin strap detection</option><option value="MLPS_detection"> MLPS detection</select></div></div><div class="row"id="Memory_module_selection_add"style="display: flex;align-items: center;justify-content: center;background-color: #8accea;"></div><div class="row" style="background-color: #8accea;" id="Insert_Memory_Module_Information_block_add"><div class="col-md-12"><p class="text-center" id="Memory_module_information_block_p_0">Memory module information block</p><div id="if_Memory_module_selection_select_Auto_then_change_this"><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Memory_module_ID_0">Memory module ID:</label></div><div class="col-md-6" style="background-color: #8accea;"><input type="number" step="1" max="7"min="0" class="form-control" id="Memory_module_ID_0"name="Memory_module_ID_0"placeholder="Enter your Memory module ID(0~7) ..." onblur="onTime_check_Memory_module_ID(this)" required=""></div></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Select_Memory_module_information_block_0">Memory Module vendor:</label></div><div class="col-md-6" style="background-color: #8accea;"><select class="form-control" name="Select_Memory_module_information_block_0" id="Select_Memory_module_information_block_0" required=""><option value="">Select...</option><option value="HYNIX">HYNIX</option><option value="PALLADIUM">PALLADIUM</option><option value="QIMONDA">QIMONDA</option><option value="SAMSUNG">SAMSUNG</option><option value="AUTODETECT">AUTODETECT</option><option value="WINBOND">WINBOND</option><option value="NANYA">NANYA</option><option value="ELIXIR">ELIXIR</option><option value="ELPIDA">ELPIDA</option><option value="MEZZA">MEZZA</option><option value="MICRON">MICRON</option><option value="PROMOS">PROMOS</option><option value="AMD">AMD</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Module_vendor_P_N_0">Memory Module vendor P/N:</label></div><div class="col-md-6" style="background-color: #8accea;"><input type="text" class="form-control" id="Module_vendor_P_N_0" placeholder="Enter your Module vendor P/N..." name="Module_vendor_P_N_0" required=""></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Memory_Voltage_V_0">Memory Voltage(V):</label></div><div class="col-md-6" style="background-color: #8accea;"><input type="number" step="any" class="form-control" id="Memory_Voltage_V_0" name="Memory_Voltage_V_0"placeholder="Enter your Memory Voltage..." required=""></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Select_Module_density_0">Memory Module density:</label></div><div class="col-md-6" style="background-color: #8accea;"><select class="form-control" name="Select_Module_density_0" id="Select_Module_density_0" required=""><option value="">Select...</option><option value="16Mx32">16Mx32</option><option value="32Mx32">32Mx32</option><option value="8Mx32">8Mx32</option><option value="128Mx8">128Mx8</option><option value="16Mx16">16Mx16</option><option value="32Mx16">32Mx16</option><option value="64Mx16">64Mx16</option><option value="64Mx8">64Mx8</option><option value="128Mx16">128Mx16</option><option value="256Mx16">256Mx16</option><option value="256Mx8">256Mx8</option><option value="512Mx16">512Mx16</option><option value="512Mx8">512Mx8</option><option value="128Mx32">128Mx32</option><option value="256Mx32">256Mx32</option><option value="64Mx32">64Mx32</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;">Memory Module channel size:</div><div class="col-md-6" style="background-color: #8accea;"><select disabled="" id="Select_Module_channel_size_0" name="Select_Module_channel_size_0" class="form-control" required=""><option value="">Select...</option><option selected="" value="CHANNEL_32BIT">32-Bit channel</option><option value="CHANNEL_64BIT">64-Bit channel</option><option value="CHANNEL_128BIT">128-Bit channel</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Select_Number_of_channels_0">Number of channels:</label></div><div class="col-md-6" style="background-color: #8accea;"><select class="form-control" name="Select_Number_of_channels_0" id="Select_Number_of_channels_0" onchange="onchange_Calculation_Memory_Data_width(this,0)" required=""><option value="">Select...</option><option value="EIGHT_CHANNEL">Eight Channel</option><option value="FOUR_CHANNEL">Four Channel</option><option value="TWO_CHANNEL">Two Channel</option><option value="ONE_CHANNEL">One Channel</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;">Memory Data width:</div><div class="col-md-6" style="background-color: #8accea;"><label  class="form-control" id="Memory_Data_width_0"name="Memory_Data_width_0" style="margin:0;">0 bit</label></div></div><div class="row" style="background-color: #8accea;margin-bottom: 2.5%;"><div class="col-md-6" style="background-color: #8accea;margin-bottom: 1.5%;"><label for="Select_Rank_0">Rank:</label></div><div class="col-md-6" style="background-color: #8accea;margin-bottom: 1.5%;"><select class="form-control" name="Select_Rank_0" id="Select_Rank_0" required=""><option value="">Select...</option><option value="SINGLE_RANK">SINGLE</option><option value="DUAL_RANK">DUAL</option></select></div></div></div></div><div id="Insert_hightLight"></div><div class="row"><div class="col-md-12" style="display: flex;align-items: center;justify-content: center;background-color: #a4d9f2;border-radius:12px;box-sizing: border-box;"><!--div class="row" style="background-color: #8accea;border-radius:12px;box-sizing: border-box;"><p class="text-center" style="font-size:medium;">Insert Memory Module Information block</p></div--><!--div class="row" style="display: flex;align-items: center;justify-content: center;background-color: #a4d9f2;border-radius:12px;box-sizing: border-box;"--><button title="Click to add Memory Module Information block " class="btn btn-default" id="Button_InsertMemoryInformation" type="button" onclick="AddInsert_Memory_Module_Information_block_form()">Add</button><!--/div--></div></div></div>');
   //beta
/*$("#Memory_module_ID_0").blur(function(){
  onTime_check_Memory_module_ID(this);
} );*/
   
  }

///////////////////////////////////
//增加Memory module information block
var Insert_Memory_Module_Information_block_form_count=1;
//增加

function AddInsert_Memory_Module_Information_block_form(){
  if(document.getElementById("Memory_module_selection").value==""){
    alert("Please Select Memory module selection!");
  }else{
    var if_Memory_module_selection_select_Auto_Merge_v_html='<div id="if_Memory_module_selection_select_Auto_then_change_this"><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Memory_module_ID_'+Insert_Memory_Module_Information_block_form_count+'">Memory module ID:</label></div><div class="col-md-6" style="background-color: #8accea;"><input type="number" step="1" max="7" min="0" class="form-control" id="Memory_module_ID_'+Insert_Memory_Module_Information_block_form_count+'"name="Memory_module_ID_'+Insert_Memory_Module_Information_block_form_count+'"placeholder="Enter your Memory module ID(0~7)..." onblur="onTime_check_Memory_module_ID(this)" required=""></div></div></div>';
if(document.getElementById("Memory_module_selection").value=="Auto"){
  if_Memory_module_selection_select_Auto_Merge_v_html="";
}
$('#Insert_Memory_Module_Information_block_add').append('<div class="col-md-12"><button title="Click to remove this Memory module information block form" class="btn btn-default col-md-12" id="Button_Memory_Module_Information_block_remove" onclick="Button_Memory_Module_Information_block_remove_removethisparentNode(this)" type="button">Remove</button><p class="text-center" id="Memory_module_information_block_p_'+Insert_Memory_Module_Information_block_form_count+'">Memory module information block</p>'+if_Memory_module_selection_select_Auto_Merge_v_html+'<div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Select_Memory_module_information_block_'+Insert_Memory_Module_Information_block_form_count+'">Memory Module vendor:</label></div><div class="col-md-6" style="background-color: #8accea;"><select class="form-control" name="Select_Memory_module_information_block_'+Insert_Memory_Module_Information_block_form_count+'" id="Select_Memory_module_information_block_'+Insert_Memory_Module_Information_block_form_count+'" required=""><option value="">Select...</option><option value="HYNIX">HYNIX</option><option value="PALLADIUM">PALLADIUM</option><option value="QIMONDA">QIMONDA</option><option value="SAMSUNG">SAMSUNG</option><option value="AUTODETECT">AUTODETECT</option><option value="WINBOND">WINBOND</option><option value="NANYA">NANYA</option><option value="ELIXIR">ELIXIR</option><option value="ELPIDA">ELPIDA</option><option value="MEZZA">MEZZA</option><option value="MICRON">MICRON</option><option value="PROMOS">PROMOS</option><option value="AMD">AMD</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Module_vendor_P_N_'+Insert_Memory_Module_Information_block_form_count+'">Memory Module vendor P/N:</label></div><div class="col-md-6" style="background-color: #8accea;"><input type="text" class="form-control" id="Module_vendor_P_N_'+Insert_Memory_Module_Information_block_form_count+'" placeholder="Enter your Module vendor P/N..." name="Module_vendor_P_N_'+Insert_Memory_Module_Information_block_form_count+'" required=""></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Memory_Voltage_V_'+Insert_Memory_Module_Information_block_form_count+'">Memory Voltage(V):</label></div><div class="col-md-6" style="background-color: #8accea;"><input type="number" step="any" class="form-control" id="Memory_Voltage_V_'+Insert_Memory_Module_Information_block_form_count+'" name="Memory_Voltage_V_'+Insert_Memory_Module_Information_block_form_count+'"placeholder="Enter your Memory Voltage..." required=""></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Select_Module_density_'+Insert_Memory_Module_Information_block_form_count+'">Memory Module density:</label></div><div class="col-md-6" style="background-color: #8accea;"><select class="form-control" name="Select_Module_density_'+Insert_Memory_Module_Information_block_form_count+'" id="Select_Module_density_'+Insert_Memory_Module_Information_block_form_count+'" required=""><option value="">Select...</option><option value="16Mx32">16Mx32</option><option value="32Mx32">32Mx32</option><option value="8Mx32">8Mx32</option><option value="128Mx8">128Mx8</option><option value="16Mx16">16Mx16</option><option value="32Mx16">32Mx16</option><option value="64Mx16">64Mx16</option><option value="64Mx8">64Mx8</option><option value="128Mx16">128Mx16</option><option value="256Mx16">256Mx16</option><option value="256Mx8">256Mx8</option><option value="512Mx16">512Mx16</option><option value="512Mx8">512Mx8</option><option value="128Mx32">128Mx32</option><option value="256Mx32">256Mx32</option><option value="64Mx32">64Mx32</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;">Memory Module channel size:</div><div class="col-md-6" style="background-color: #8accea;"><select disabled="" id="Select_Module_channel_size_'+Insert_Memory_Module_Information_block_form_count+'" name="Select_Module_channel_size_'+Insert_Memory_Module_Information_block_form_count+'" class="form-control" required=""><option value="">Select...</option><option selected="" value="CHANNEL_32BIT">32-Bit channel</option><option value="CHANNEL_64BIT">64-Bit channel</option><option value="CHANNEL_128BIT">128-Bit channel</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;"><label for="Select_Number_of_channels_'+Insert_Memory_Module_Information_block_form_count+'">Number of channels:</label></div><div class="col-md-6" style="background-color: #8accea;"><select class="form-control" name="Select_Number_of_channels_'+Insert_Memory_Module_Information_block_form_count+'" id="Select_Number_of_channels_'+Insert_Memory_Module_Information_block_form_count+'"onchange="onchange_Calculation_Memory_Data_width(this,'+Insert_Memory_Module_Information_block_form_count+')" required=""><option value="">Select...</option><option value="EIGHT_CHANNEL">Eight Channel</option><option value="FOUR_CHANNEL">Four Channel</option><option value="TWO_CHANNEL">Two Channel</option><option value="ONE_CHANNEL">One Channel</option></select></div></div><div class="row" style="background-color: #8accea;"><div class="col-md-6" style="background-color: #8accea;">Memory Data width:</div><div class="col-md-6" style="background-color: #8accea;"><label  class="form-control" id="Memory_Data_width_'+Insert_Memory_Module_Information_block_form_count+'"name="Memory_Data_width_'+Insert_Memory_Module_Information_block_form_count+'"style="margin:0;">0 bit</label></div></div><div class="row" style="background-color: #8accea;margin-bottom: 2.5%;"><div class="col-md-6" style="background-color: #8accea;margin-bottom: 1.5%;"><label for="Select_Rank_'+Insert_Memory_Module_Information_block_form_count+'">Rank:</label></div><div class="col-md-6" style="background-color: #8accea;margin-bottom: 1.5%;"><select class="form-control" name="Select_Rank_'+Insert_Memory_Module_Information_block_form_count+'" id="Select_Rank_'+Insert_Memory_Module_Information_block_form_count+'" required=""><option value="">Select...</option><option value="SINGLE_RANK">SINGLE</option><option value="DUAL_RANK">DUAL</option></select></div></div></div>');
  if(document.getElementById("Memory_module_selection").value!="Auto"){
    //beta
    /*$("#Memory_module_ID_"+Insert_Memory_Module_Information_block_form_count).blur(function(){
  onTime_check_Memory_module_ID(this);
} );*/
  }
  Insert_Memory_Module_Information_block_form_count++;
  refreshAll_added_form_number();
  }

}
//減少
/*$('.col-md-12').on('click', '#Button_Memory_Module_Information_block_remove', function(e) {
    e.preventDefault();
    $(this).parent().remove();
    refreshAll_added_form_number();
});*/
function Button_Memory_Module_Information_block_remove_removethisparentNode(Selected){
  
  $(Selected.parentNode).remove();
  refreshAll_added_form_number();
  
}
/////////////////////////////////////
  //將Memory module detection GPIO pin assignment的所有item值存入
  function pushMemory_module_detection_GPIO_pin_assignment(){
    
    /*for(var i =0;i<3//MODULE_SELECT_FROM_STRAP_PIN_item_count//;i++){
      var Memory_module_detection_GPIO_pin_assignment_in_this_function_id_attached="Select_Memory_module_detection_GPIO_pin_assignment_"+i;
      var Memory_module_detection_GPIO_pin_assignment_in_this_function_id=document.getElementById(Memory_module_detection_GPIO_pin_assignment_in_this_function_id_attached);
      if(Memory_module_detection_GPIO_pin_assignment_in_this_function_id==null){
        //已被remove
      }else {
        //存在, 存入
      var Memory_module_detection_GPIO_pin_assignment_in_this_function_id_Length=Memory_module_detection_GPIO_pin_assignment_in_this_function_id.length;

        push_N_Select(Memory_module_detection_GPIO_pin_assignment_in_this_function_id,Memory_module_detection_GPIO_pin_assignment_in_this_function_id_Length,Memory_module_detection_GPIO_pin_assignment);

      }
    }*/
    var bit_0_GPIO=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_0").value;
    var bit_1_GPIO=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_1").value;
    var bit_2_GPIO=document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_2").value;
    var bit_0_1_2_GPIO_String=" [bit 0 ] "+bit_0_GPIO+" [bit 1 ]"+bit_1_GPIO+" [bit 2 ] "+bit_2_GPIO;
    Memory_module_detection_GPIO_pin_assignment.push(bit_0_1_2_GPIO_String);
    Memory_module_detection_GPIO_pin_assignment_database_id.push(["Select_Memory_module_detection_GPIO_pin_assignment_0","Select_Memory_module_detection_GPIO_pin_assignment_1","Select_Memory_module_detection_GPIO_pin_assignment_2"]);
    Database_id_value_String=Database_id_value_String+'document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_0").value="'+document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_0").value+'";';   
    Database_id_value_String=Database_id_value_String+'document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_1").value="'+document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_1").value+'";';   
    Database_id_value_String=Database_id_value_String+'document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_2").value="'+document.getElementById("Select_Memory_module_detection_GPIO_pin_assignment_2").value+'";';   

  }
  /////////////////////////////////////////////
  function onchange_Calculation_Memory_Data_width(Selected,Memory_module_information_block_count){
    var InnerHTML_id="Memory_Data_width_"+Memory_module_information_block_count;
    var InnerHTML_value="0 bit";
    var channel_size_number_32=32;
    var Number_channels_number=0;
    if(Selected.value==""){
      Number_channels_number=0;
    }else if(Selected.value=="EIGHT_CHANNEL"){
      Number_channels_number=8;
    }else if(Selected.value=="FOUR_CHANNEL"){
      Number_channels_number=4;

    }else if(Selected.value=="TWO_CHANNEL"){
      Number_channels_number=2;

    }else if(Selected.value=="ONE_CHANNEL"){
      Number_channels_number=1;

    }

    InnerHTML_value=(channel_size_number_32*Number_channels_number).toString()+"bit";
    document.getElementById(InnerHTML_id).innerHTML=InnerHTML_value;
  }
  /////////////////////////////////////////////
  //刷新All  added_form count

  //Voltage 計算所有ID: formcount
  //Connector 計算所有ID:Connector_form_count
  //Memory module information block 計算所有的block :Insert_Memory_Module_Information_block_form_count
  
  function refreshAll_added_form_number(){
    var Voltage_used_refresh_add_count=0;
  var Connector_used_refresh_add_count=0;
  var Memory_module_information_block__used_refresh_add_count=0;
    for(var i =1;i<=formcount;i++){
      if(document.getElementById("VR_SVI2_P_N_"+i)==null){

      }else {

        document.getElementById("Voltage_Phase_controls_h3_"+i).innerHTML="SVI2 Voltage / Phase controls["+Voltage_used_refresh_add_count+"]";
        Voltage_used_refresh_add_count++;
      }
    }
    //根據Platform design select, if select HG, remove Connector and don't refresh Connector count
    if(document.getElementById("Platform_design").value=="HG"){
      //don't refresh
    }else{
      //do refresh
       for(var j=1;j<=Connector_form_count;j++){
      if(document.getElementById("Connector_Type_"+j)==null){

      }else{
        document.getElementById("Connectors_h3_"+j).innerHTML="Connectors["+Connector_used_refresh_add_count+"]";
        Connector_used_refresh_add_count++;
      }
    }
    }
    //------------------------------------------------------------------------------------------
   
    for(var k=1;k<=Insert_Memory_Module_Information_block_form_count;k++){
      if(document.getElementById("Select_Memory_module_information_block_"+k)==null){

      }else{
        document.getElementById("Memory_module_information_block_p_"+k).innerHTML="Memory module information block["+Memory_module_information_block__used_refresh_add_count+"]";
        Memory_module_information_block__used_refresh_add_count++;
      }
    }
  }
  //刷新bit_item_number
  function refresh_bit_item_number(){

    var view_item_number=0;
    for(var i =0;i<MODULE_SELECT_FROM_STRAP_PIN_item_count;i++){

      var span_bit_count_id_attched="span_bit_count_"+i;
      var bit_item_check=document.getElementById(span_bit_count_id_attched);
      if(bit_item_check==null){

      }else{

        bit_item_check.innerHTML="bit "+view_item_number;
        view_item_number=view_item_number+1;
        
      }
      
    }
  }
  //將Memory module information block form 的值存入
  function pushMemory_module_information_block_form(){
    for(var i =0;i<Insert_Memory_Module_Information_block_form_count;i++){
      var Select_Memory_module_information_block_id_attached="Select_Memory_module_information_block_"+i;
      var Text_Memory_module_ID_id_attached="Memory_module_ID_"+i;
      var Text_Module_vendor_P_N_id_attached="Module_vendor_P_N_"+i;
      var Text_Memory_Voltage_V_id_attached="Memory_Voltage_V_"+i;
      var Select_Module_density_id_attached="Select_Module_density_"+i;
      var Select_Module_channel_size_id_attached="Select_Module_channel_size_"+i;
      var Select_Number_of_channels_id_attached="Select_Number_of_channels_"+i;
      var InnerHTML_Memory_Data_width_id_attached="Memory_Data_width_"+i;
      var Select_Rank_id_attached="Select_Rank_"+i;
      if(document.getElementById("Memory_module_selection").value=="Auto"){

      }else{
        var Text_Memory_module_ID_id=document.getElementById(Text_Memory_module_ID_id_attached);
      }
      
      var Select_Memory_module_information_block_id=document.getElementById(Select_Memory_module_information_block_id_attached);
      var Text_Module_vendor_P_N_id=document.getElementById(Text_Module_vendor_P_N_id_attached);
      var Text_Memory_Voltage_V_id=document.getElementById(Text_Memory_Voltage_V_id_attached);
      var Select_Module_density_id=document.getElementById(Select_Module_density_id_attached);
      var Select_Module_channel_size_id=document.getElementById(Select_Module_channel_size_id_attached);
      var Select_Number_of_channels_id=document.getElementById(Select_Number_of_channels_id_attached);
      var InnerHTML_Memory_Data_width_id=document.getElementById(InnerHTML_Memory_Data_width_id_attached);
      var Select_Rank_id=document.getElementById(Select_Rank_id_attached);
      if(Select_Memory_module_information_block_id==null){

      }else{
      var Select_Memory_module_information_block_id_Length=Select_Memory_module_information_block_id.length;
      var Select_Module_density_id_Length=Select_Module_density_id.length;
      var Select_Module_channel_size_id_Length=Select_Module_channel_size_id.length;
      var Select_Number_of_channels_id_Length=Select_Number_of_channels_id.length;
      var Select_Rank_id_Length=Select_Rank_id.length;

     push_N_Select(Select_Memory_module_information_block_id,Select_Memory_module_information_block_id_Length,Module_vendor);
      push_N_Select(Select_Module_density_id,Select_Module_density_id_Length,Module_density);
     push_N_Select(Select_Module_channel_size_id,Select_Module_channel_size_id_Length,Module_channel_size);
      push_N_Select(Select_Number_of_channels_id,Select_Number_of_channels_id_Length,Number_of_channels);
      push_N_Select(Select_Rank_id,Select_Rank_id_Length,Rank);
      push_N_Text(Text_Module_vendor_P_N_id,Module_vendor_P_N);
      push_N_Text(Text_Memory_Voltage_V_id,Memory_Voltage_V);

      Module_vendor_database_id.push(Select_Memory_module_information_block_id_attached);
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+Select_Memory_module_information_block_id_attached+'").value="'+document.getElementById(Select_Memory_module_information_block_id_attached).value+'";';   
      //Module_density_database_id.push(Text_Memory_module_ID_id_attached);
      //Database_id_value_String=Database_id_value_String+'document.getElementById("'+Text_Memory_module_ID_id_attached+'").value="'+document.getElementById(Text_Memory_module_ID_id_attached).value+'";';   
      //
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+Select_Module_density_id_attached+'").value="'+document.getElementById(Select_Module_density_id_attached).value+'";';   
      
      //
      Module_channel_size_database_id.push(Select_Module_channel_size_id_attached);
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+Select_Module_channel_size_id_attached+'").value="'+document.getElementById(Select_Module_channel_size_id_attached).value+'";';   
      Number_of_channels_database_id.push(Select_Number_of_channels_id_attached);
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+Select_Number_of_channels_id_attached+'").value="'+document.getElementById(Select_Number_of_channels_id_attached).value+'";';   
      Rank_database_id.push(Select_Rank_id_attached);
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+Select_Rank_id_attached+'").value="'+document.getElementById(Select_Rank_id_attached).value+'";';   
      Module_vendor_P_N_database_id.push(Text_Module_vendor_P_N_id_attached);
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+Text_Module_vendor_P_N_id_attached+'").value="'+document.getElementById(Text_Module_vendor_P_N_id_attached).value+'";';   
      Memory_Voltage_V_database_id.push(Text_Memory_Voltage_V_id_attached);
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+Text_Memory_Voltage_V_id_attached+'").value="'+document.getElementById(Text_Memory_Voltage_V_id_attached).value+'";';   
      if(document.getElementById("Memory_module_selection").value=="Auto"){
        
      }else{
        push_N_Text(Text_Memory_module_ID_id,Memory_module_ID);
        Memory_module_ID_database_id.push(Text_Memory_module_ID_id_attached);
        Database_id_value_String=Database_id_value_String+'document.getElementById("'+Text_Memory_module_ID_id_attached+'").value="'+document.getElementById(Text_Memory_module_ID_id_attached).value+'";';   
      }
      
      push_N_InnerHTML(InnerHTML_Memory_Data_width_id,Memory_Data_width);
      Memory_Data_width_database_id.push(InnerHTML_Memory_Data_width_id_attached);
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+InnerHTML_Memory_Data_width_id_attached+'").value="'+document.getElementById(InnerHTML_Memory_Data_width_id_attached).value+'";';   
      }
      


    }
  }



 

 
/////////////////////////////////////////
//根據Connector selected type 變更HDMI eDP DISPLAYPORT form
function onChange_HDMI_eDP_DISPLAYPORT(Selected,Connector_count){
  if(Selected.value==""){
    ResestAddMemory_HDMI_eDP_DISPLAYPORT(Connector_count);
  }else if(Selected.value=="CONNECTOR_HDMI_TYPE_A_ENUM_ID#"){
    //HDMI
    ResestAddMemory_HDMI_eDP_DISPLAYPORT(Connector_count);
    HDMI_Selected_form(Connector_count);

  }else if(Selected.value=="CONNECTOR_eDP_ENUM_ID#"){
    //eDP
    ResestAddMemory_HDMI_eDP_DISPLAYPORT(Connector_count);
    eDP_Selected_form(Connector_count);
  }else if(Selected.value=="CONNECTOR_DISPLAYPORT_ENUM_ID#"){
    //DISPLAYPORT
    ResestAddMemory_HDMI_eDP_DISPLAYPORT(Connector_count);
    DISPLAYPORT_Selected_form(Connector_count);
  }
}

//Change之前刷新或是重置
function ResestAddMemory_HDMI_eDP_DISPLAYPORT(Connector_count){
  
    var divHDMI_eDP_DISPLAYPORTID="Connector_Type_add_remove_control_"+Connector_count;
    var list = document.getElementById(divHDMI_eDP_DISPLAYPORTID);
    if (list.hasChildNodes()) {
      for(var i=0; i<list.childNodes.length;i++){
       // console.log(list.childNodes[i]);
        list.removeChild(list.childNodes[i]);
      }

        
    }
    
 }
 //Change Connector Type form
 function HDMI_Selected_form(Connector_count){

  var Connector_Type_add_remove_control_id="#Connector_Type_add_remove_control_"+Connector_count;
  $(Connector_Type_add_remove_control_id).append('<div class="row" style="display: flex;align-items: center;justify-content: center;background-color: #8accea;width: 80%;"><div class="col-md-12" id="Connector_HDMI_Type_header">Connector Type:HDMI</div><div class="col-md-6" style="background-color: #8accea;"><label for="HDMI_Select_I2C_Line_'+Connector_count+'">I2C Line:</label></div><div class="col-md-6" style="background-color: #8accea; margin-bottom: 2%;margin-top: 2%;"><select class="form-control" name="HDMI_Select_I2C_Line_'+Connector_count+'" id="HDMI_Select_I2C_Line_'+Connector_count+'" onchange="onTime_check_I2C_Line(this)"required=""><option value="">Select...</option><option value="DDC1_AUX1_ID">DDC1CLK/DDC1DATA</option><option value="DDC2_AUX2_ID">DDC2CLK/DDC2DATA</option><option value="DDC3_AUX3_ID">DDCCLK_AUX3P/DDCDATA_AUX3N</option><option value="DDC4_AUX4_ID">DDCCLK_AUX4P/DDCDATA_AUX4N</option><option value="DDC5_AUX5_ID">DDCCLK_AUX5P/DDCDATA_AUX5N</option><option value="DDC7_AUX7_ID">DDCCLK_AUX6P/DDCDATA_AUX6N</option><option value="SCL_SDA_ID">SCL/SDA</option><option value="DDC6_ID">DDCVGACLK/DDCVGADATA</option></select></div><div class="col-md-6" style="background-color: #8accea;"><label for="HDMI_Select_HPD_ID_'+Connector_count+'">HPD ID:</label></div><div class="col-md-6" style="background-color: #8accea; margin-bottom: 2%;margin-top: 2%;"><select class="form-control" name="HDMI_Select_HPD_ID_'+Connector_count+'" id="HDMI_Select_HPD_ID_'+Connector_count+'" onchange="onTime_check_HPD_ID(this)"required=""><option value="">Select...</option><option value="NO_HPD_ID">No HPD</option><option value="HPD1_ID">HPD1</option><option value="HPD2_ID">GPIO_14_HPD2</option><option value="HPD3_ID">GPIO_18_HPD3</option><option value="HPD4_ID">GENERICE_HPD4</option><option value="HPD5_ID">GENERICF_HPD5</option><option value="HPD6_ID">GENERICG_HPD6</option></select></div></div>');
 
 }
  function eDP_Selected_form(Connector_count){
  var Connector_Type_add_remove_control_id="#Connector_Type_add_remove_control_"+Connector_count;
  $(Connector_Type_add_remove_control_id).append('<div class="row" style="display: flex;align-items: center;justify-content: center;background-color: #8accea;width: 80%;"><div class="col-md-12" id="Connector_eDP_Type_header">Connector Type:eDP</div><div class="col-md-6" style="background-color: #8accea;"><label for="eDP_Select_I2C_Line_'+Connector_count+'">I2C Line:</label></div><div class="col-md-6" style="background-color: #8accea; margin-bottom: 2%;margin-top: 2%;"><select class="form-control" name="eDP_Select_I2C_Line_'+Connector_count+'" id="eDP_Select_I2C_Line_'+Connector_count+'" onchange="onTime_check_I2C_Line(this)"required=""><option value="">Select...</option><option value="DDC1_AUX1_ID">DDC1CLK/DDC1DATA and AUX1P/AUX1N</option><option value="DDC2_AUX2_ID">DDC2CLK/DDC2DATA and AUX2P/AUX2N</option><option value="DDC3_AUX3_ID">DDCCLK_AUX3P/DDCDATA_AUX3N</option><option value="DDC4_AUX4_ID">DDCCLK_AUX4P/DDCDATA_AUX4N</option><option value="DDC5_AUX5_ID">DDCCLK_AUX5P/DDCDATA_AUX5N</option><option value="DDC7_AUX7_ID">DDCCLK_AUX6P/DDCDATA_AUX6N</option><option value="SCL_SDA_ID">SCL/SDA</option></select></div><div class="col-md-6" style="background-color: #8accea;"><label for="eDP_Select_HPD_ID_'+Connector_count+'">HPD ID:</label></div><div class="col-md-6"  style="background-color: #8accea; margin-bottom: 2%;margin-top: 2%;"><select class="form-control" name="eDP_Select_HPD_ID_'+Connector_count+'" id="eDP_Select_HPD_ID_'+Connector_count+'"onchange="onTime_check_HPD_ID(this)" required=""><option value="">Select...</option><option value="NO_HPD_ID">No HPD</option><option value="HPD1_ID">HPD1</option><option value="HPD2_ID">GPIO_14_HPD2</option><option value="HPD3_ID">GPIO_18_HPD3</option><option value="HPD4_ID">GENERICE_HPD4</option><option value="HPD5_ID">GENERICF_HPD5</option><option value="HPD6_ID">GENERICG_HPD6</option></select></div><div class="col-md-6" style="background-color: #8accea;"><label for="PWM_working_frequency_HZ_'+Connector_count+'">PWM working frequency (HZ) :</label></div><div class="col-md-6" style="background-color: #8accea; margin-bottom: 2%;margin-top: 2%;"><input type="text" class="form-control" placeholder="Enter your PWM working frequency(HZ)..."name="PWM_working_frequency_HZ_'+Connector_count+'"id="PWM_working_frequency_HZ_'+Connector_count+'"></div><div class="col-md-6" style="background-color: #8accea;"><label for="eDP_CheckBox_MST_and_HBR2_enable_'+Connector_count+'">MST and HBR2 enable:</label></div><div class="col-md-6"  style="background-color: #8accea; margin-bottom: 2%;margin-top: 2%;"><label for="eDP_CheckBox_MST_and_HBR2_enable_'+Connector_count+'"><input type="checkbox" value="Enable" id="eDP_CheckBox_MST_and_HBR2_enable_'+Connector_count+'">Enable</label></div></div>');
  
 }
  function DISPLAYPORT_Selected_form(Connector_count){
  var Connector_Type_add_remove_control_id="#Connector_Type_add_remove_control_"+Connector_count;
  $(Connector_Type_add_remove_control_id).append('<div class="row" style="display: flex;align-items: center;justify-content: center;background-color: #8accea;width: 80%;"><div class="col-md-12" id="Connector_DISPLAYPORT_Type_header">Connector Type:DISPLAYPORT</div><div class="col-md-6" style="background-color: #8accea;"><label for="DISPLAYPORT_Select_I2C_Line_'+Connector_count+'">I2C Line:</label></div><div class="col-md-6" style="background-color: #8accea; margin-bottom: 2%;margin-top: 2%;"><select class="form-control" name="DISPLAYPORT_Select_I2C_Line_'+Connector_count+'" id="DISPLAYPORT_Select_I2C_Line_'+Connector_count+'" onchange="onTime_check_I2C_Line(this)"required=""><option value="">Select...</option><option value="DDC1_AUX1_ID">DDC1CLK/DDC1DATA and AUX1P/AUX1N</option><option value="DDC2_AUX2_ID">DDC2CLK/DDC2DATA and AUX2P/AUX2N</option><option value="DDC3_AUX3_ID">DDCCLK_AUX3P/DDCDATA_AUX3N</option><option value="DDC4_AUX4_ID">DDCCLK_AUX4P/DDCDATA_AUX4N</option><option value="DDC5_AUX5_ID">DDCCLK_AUX5P/DDCDATA_AUX5N</option><option value="DDC7_AUX7_ID">DDCCLK_AUX6P/DDCDATA_AUX6N</option><option value="SCL_SDA_ID">SCL/SDA</option></select></div><div class="col-md-6" style="background-color: #8accea;"><label for="DISPLAYPORT_Select_HPD_ID_'+Connector_count+'">HPD ID:</label></div><div class="col-md-6"  style="background-color: #8accea; margin-bottom: 2%;margin-top: 2%;"><select class="form-control" name="DISPLAYPORT_Select_HPD_ID_'+Connector_count+'" id="DISPLAYPORT_Select_HPD_ID_'+Connector_count+'"onchange="onTime_check_HPD_ID(this)" required=""><option value="">Select...</option><option value="NO_HPD_ID">No HPD</option><option value="HPD1_ID">HPD1</option><option value="HPD2_ID">GPIO_14_HPD2</option><option value="HPD3_ID">GPIO_18_HPD3</option><option value="HPD4_ID">GENERICE_HPD4</option><option value="HPD5_ID">GENERICF_HPD5</option><option value="HPD6_ID">GENERICG_HPD6</option></select></div><div class="col-md-6" style="background-color: #8accea;"><label for="DISPLAYPORT_CheckBox_MST_and_HBR2_enable_'+Connector_count+'">MST and HBR2 enable:</label></div><div class="col-md-6"  style="background-color: #8accea; margin-bottom: 2%;margin-top: 2%;"><label for="DISPLAYPORT_CheckBox_MST_and_HBR2_enable_'+Connector_count+'"><input type="checkbox" value="Enable" id="DISPLAYPORT_CheckBox_MST_and_HBR2_enable_'+Connector_count+'">Enable</label></div></div>');
  
 }


 /////////////////////////////////////////
 //Source Type item add
 var Source_Type_item_creat_count=0;
function button_Source_Type_add(Connector_count){
  var Source_Type_add_remove_control_id="#Source_Type_add_remove_control_"+Connector_count;
  Source_Type_item_creat_count+=1;
 $(Source_Type_add_remove_control_id).append('<div class="col-md-12"  style="display: flex;align-items: center;justify-content: center;background-color: #8accea;max-width: 80%;"><button title="Click to remove this Source Type item" class="btn btn-default col-md-6" id="Button_Source_Type_remove" onclick="Button_Source_Type_remove_removethisparentNode(this)" type="button">Remove</button><!--div class="col-md-6"  style="background-color: #8accea;margin-left:3%; "--><div class="col-md-12"  style="background-color: #8accea;margin-bottom: 1%;max-width: 50%;"><select class="form-control" name="Select_Source_Type_'+Connector_count+'_'+Source_Type_item_creat_count+'" id="Select_Source_Type_'+Connector_count+'_'+Source_Type_item_creat_count+'" required=""><option value="">Select...</option><option value="ENCODER_INTERNAL_UNIPHY_ENUM_ID2">DPA TX0_DPA2~TXC_DPA3</option><option value="ENCODER_INTERNAL_UNIPHY_ENUM_ID1">DPB TX0_DPB2~TXC_DPB3</option><option value="ENCODER_INTERNAL_UNIPHY1_ENUM_ID2">DPC TX0_DPC2~TXC_DPC3</option><option value="ENCODER_INTERNAL_UNIPHY1_ENUM_ID1">DPD TX0_DPD2~TXC_DPD3</option><option value="ENCODER_INTERNAL_UNIPHY2_ENUM_ID2">DPE T2X0_DPE2~T2XC_DPE3</option><option value="ENCODER_INTERNAL_UNIPHY2_ENUM_ID1">DPF T2X0_DPF2~T2XC_DPF3</option></select></div></div>');
 
}

 //Source Type item remove
/*$('.col-md-12').on('click', '#Button_Source_Type_remove', function(e) {
    e.preventDefault();
    $(this).parent().remove();
});
*/
function Button_Source_Type_remove_removethisparentNode(Selected){
  
  $(Selected.parentNode).remove();
  
}
//////////////////////////////////////////
//增加Connector form
var Connector_form_count=0;
function Button_Add_Connectors_function(){
  
   Connector_form_count=Connector_form_count+1;
  $('#Connector_Add_Area').append('<div><button title="Click to remove this Connector form" type="button" class="btn btn-default" id="button_remove_Connectors" onclick="button_remove_Connectors_removethisparentNode(this)">Remove</button><div class="row"><div class="col-md-12"><h3><label id="Connectors_h3_'+Connector_form_count+'">Connectors</label></h3></div></div><div class="row VBIOS_item_padding"><div class="col-md-6"><label for="Connector_Type_'+Connector_form_count+'">Connector Type:</label></div><div class="col-md-6" ><select class="form-control" onchange="onChange_HDMI_eDP_DISPLAYPORT(this,'+Connector_form_count+')" name="Connector_Type_'+Connector_form_count+'" id="Connector_Type_'+Connector_form_count+'" required=""><option value="">Select...</option><option value="CONNECTOR_HDMI_TYPE_A_ENUM_ID#">HDMI</option><option value="CONNECTOR_eDP_ENUM_ID#">eDP</option><option value="CONNECTOR_DISPLAYPORT_ENUM_ID#">DISPLAY PORT</option></select></div></div><div class="row Source_Type_padding" id="Source_Type_add_remove_control_'+Connector_form_count+'"><div class="col-md-12" id="Source_Type_header"><label for="Select_Source_Type_'+Connector_form_count+'_0">Source Type:</label></div><div class="col-md-12"  style="display: flex;align-items: center;justify-content: center;background-color: #8accea;max-width: 80%;min-width:100px"><!--button title="Click to remove this Source Type item" class="btn btn-default col-md-6" id="Button_Source_Type_remove" type="button"disabled="">Remove</button--><!--div class="col-md-12"  style="background-color: #8accea;margin-left:3%; "--><div class="col-md-12"  style="background-color: #8accea;margin-bottom: 1%;max-width: 400px;min-width:100px;display: flex;align-items: center;justify-content: center;"><select class="form-control" name="Select_Source_Type_'+Connector_form_count+'_0" id="Select_Source_Type_'+Connector_form_count+'_0" onchange="onTime_check_Source_Type(this)"required=""><option value="">Select...</option><option value="ENCODER_INTERNAL_UNIPHY_ENUM_ID2">DPA TX0_DPA2~TXC_DPA3</option><option value="ENCODER_INTERNAL_UNIPHY_ENUM_ID1">DPB TX0_DPB2~TXC_DPB3</option><option value="ENCODER_INTERNAL_UNIPHY1_ENUM_ID2">DPC TX0_DPC2~TXC_DPC3</option><option value="ENCODER_INTERNAL_UNIPHY1_ENUM_ID1">DPD TX0_DPD2~TXC_DPD3</option><option value="ENCODER_INTERNAL_UNIPHY2_ENUM_ID2">DPE T2X0_DPE2~T2XC_DPE3</option><option value="ENCODER_INTERNAL_UNIPHY2_ENUM_ID1">DPF T2X0_DPF2~T2XC_DPF3</option></select></div></div></div><div class="row"><div class="col-md-12" id="Button_Source_Type_add_footer" style="display: flex;align-items: center;justify-content: center;"><!--button title="Click to add Source Type item" class="btn btn-default" id="Button_Source_Type_add" onclick="button_Source_Type_add('+Connector_form_count+')" type="button" disabled="">Add</button--></div></div><div class="row Connector_Type_padding"id="Connector_Type_add_remove_control_'+Connector_form_count+'" ></div></div>');
  
  refreshAll_added_form_number();

}
//減少Connector form
/*$('#if_platform_design_select_HG_remove_else_reset').on('click', '#button_remove_Connectors', function(e) {
    e.preventDefault();
    
    
    $(this).parent().remove();
   refreshAll_added_form_number();
});*/
function button_remove_Connectors_removethisparentNode(Selected){
  
  $(Selected.parentNode).remove();
  refreshAll_added_form_number();
}
/////////////////////////////////////////
 //將N _ Connector form push

 //驗證此表單存在否
 function Check_N_Connector_form(){
 
  for(var i=0;i<=Connector_form_count;i++){
    if(document.getElementById("Connector_Type_"+i)==null){

    }else {
      var Connector_Type_id="Connector_Type_"+i;
      Connector_Type.push(document.getElementById(Connector_Type_id).value);
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+Connector_Type_id+'").value="'+document.getElementById(Connector_Type_id).value+'";';   
      Connector_Type_database_id.push(Connector_Type_id);
      var Source_Type_in_Array_count=0;
      var Source_Type_in_Array_String="";
      for(var j=0;j<=Source_Type_item_creat_count;j++){
        var Select_Source_Type_formcount_id="Select_Source_Type_"+i+"_"+j;
        if(document.getElementById(Select_Source_Type_formcount_id)==null){

        }else {
          Source_Type_in_Array_String=Source_Type_in_Array_String+"/"+Source_Type_in_Array_count+"."+document.getElementById(Select_Source_Type_formcount_id).value;
          Source_Type_in_Array_count+=1;
        }
      }
      Source_Type.push(Source_Type_in_Array_String);
      Database_id_value_String=Database_id_value_String+'document.getElementById("'+"Select_Source_Type_"+i+"_0"+'").value="'+document.getElementById("Select_Source_Type_"+i+"_0").value+'";';   
      Source_Type_database_id.push("Select_Source_Type_"+i+"_0");
      if(document.getElementById(Connector_Type_id).value==""){

      }else if(document.getElementById(Connector_Type_id).value=="CONNECTOR_HDMI_TYPE_A_ENUM_ID#"){
        var HDMI_Select_I2C_Line_id="HDMI_Select_I2C_Line_"+i;
        var HDMI_Select_HPD_ID_id="HDMI_Select_HPD_ID_"+i;

        if(document.getElementById(HDMI_Select_I2C_Line_id).value==""){

        }else{
          I2C_Line.push(document.getElementById(HDMI_Select_I2C_Line_id).value);
          Database_id_value_String=Database_id_value_String+'document.getElementById("'+HDMI_Select_I2C_Line_id+'").value="'+document.getElementById(HDMI_Select_I2C_Line_id).value+'";';   
          I2C_Line_database_id.push(HDMI_Select_I2C_Line_id);
        }
        if(document.getElementById(HDMI_Select_HPD_ID_id).value==""){

        }else{
          HPD_ID.push(document.getElementById(HDMI_Select_HPD_ID_id).value);
          Database_id_value_String=Database_id_value_String+'document.getElementById("'+HDMI_Select_HPD_ID_id+'").value="'+document.getElementById(HDMI_Select_HPD_ID_id).value+'";';   
          HPD_ID_database_id.push(HDMI_Select_HPD_ID_id);
        }
        PWM_working_frequency_HZ.push("none");
        PWM_working_frequency_HZ_database_id.push("none");
        MST_and_HBR2.push("none");
        MST_and_HBR2_database_id.push("none");
      }else if(document.getElementById(Connector_Type_id).value=="CONNECTOR_eDP_ENUM_ID#"){
        var eDP_Select_I2C_Line_id="eDP_Select_I2C_Line_"+i;
        var eDP_Select_HPD_ID_id="eDP_Select_HPD_ID_"+i;
        var eDP_CheckBox_MST_and_HBR2_enable_id="eDP_CheckBox_MST_and_HBR2_enable_"+i;
        var eDP_CheckBox_MST_and_HBR2_enable_id_tag="#eDP_CheckBox_MST_and_HBR2_enable_"+i;
        var eDP_Input_PWM_working_frequency_HZ_id="PWM_working_frequency_HZ_"+i;
        if(document.getElementById(eDP_Select_I2C_Line_id).value==""){

        }else{
          I2C_Line.push(document.getElementById(eDP_Select_I2C_Line_id).value);
          Database_id_value_String=Database_id_value_String+'document.getElementById("'+eDP_Select_I2C_Line_id+'").value="'+document.getElementById(eDP_Select_I2C_Line_id).value+'";';   
          I2C_Line_database_id.push(eDP_Select_I2C_Line_id);
        }

        if(document.getElementById(eDP_Select_HPD_ID_id).value==""){

        }else{
          HPD_ID.push(document.getElementById(eDP_Select_HPD_ID_id).value);
          Database_id_value_String=Database_id_value_String+'document.getElementById("'+eDP_Select_HPD_ID_id+'").value="'+document.getElementById(eDP_Select_HPD_ID_id).value+'";';   
          HPD_ID_database_id.push(eDP_Select_HPD_ID_id);
        }

        if($(eDP_CheckBox_MST_and_HBR2_enable_id_tag).prop("checked")){
          MST_and_HBR2.push(document.getElementById(eDP_CheckBox_MST_and_HBR2_enable_id).value);
          Database_id_value_String=Database_id_value_String+'document.getElementById("'+eDP_CheckBox_MST_and_HBR2_enable_id+'").checked=true;';   
          MST_and_HBR2_database_id.push(eDP_CheckBox_MST_and_HBR2_enable_id);
        }else {
          MST_and_HBR2.push("Disable");
          Database_id_value_String=Database_id_value_String+'document.getElementById("'+eDP_CheckBox_MST_and_HBR2_enable_id+'").checked=false;';   
          MST_and_HBR2_database_id.push(eDP_CheckBox_MST_and_HBR2_enable_id);

        }
        PWM_working_frequency_HZ.push(document.getElementById(eDP_Input_PWM_working_frequency_HZ_id).value);
        Database_id_value_String=Database_id_value_String+'document.getElementById("'+eDP_Input_PWM_working_frequency_HZ_id+'").value="'+document.getElementById(eDP_Input_PWM_working_frequency_HZ_id).value+'";';   
        PWM_working_frequency_HZ_database_id.push(eDP_Input_PWM_working_frequency_HZ_id);
      }else if(document.getElementById(Connector_Type_id).value=="CONNECTOR_DISPLAYPORT_ENUM_ID#"){
         var DISPLAYPORT_Select_I2C_Line_id="DISPLAYPORT_Select_I2C_Line_"+i;
        var DISPLAYPORT_Select_HPD_ID_id="DISPLAYPORT_Select_HPD_ID_"+i;
        var DISPLAYPORT_CheckBox_MST_and_HBR2_enable_id="DISPLAYPORT_CheckBox_MST_and_HBR2_enable_"+i;
        var DISPLAYPORT_CheckBox_MST_and_HBR2_enable_id_tag="#DISPLAYPORT_CheckBox_MST_and_HBR2_enable_"+i;
        if(document.getElementById(DISPLAYPORT_Select_I2C_Line_id).value==""){

        }else{
          I2C_Line.push(document.getElementById(DISPLAYPORT_Select_I2C_Line_id).value);
          Database_id_value_String=Database_id_value_String+'document.getElementById("'+DISPLAYPORT_Select_I2C_Line_id+'").value="'+document.getElementById(DISPLAYPORT_Select_I2C_Line_id).value+'";';   
          I2C_Line_database_id.push(DISPLAYPORT_Select_I2C_Line_id);
        }

        if(document.getElementById(DISPLAYPORT_Select_HPD_ID_id).value==""){

        }else{
          HPD_ID.push(document.getElementById(DISPLAYPORT_Select_HPD_ID_id).value);
          Database_id_value_String=Database_id_value_String+'document.getElementById("'+DISPLAYPORT_Select_HPD_ID_id+'").value="'+document.getElementById(DISPLAYPORT_Select_HPD_ID_id).value+'";';   
          HPD_ID_database_id.push(DISPLAYPORT_Select_HPD_ID_id);
        }

        if($(DISPLAYPORT_CheckBox_MST_and_HBR2_enable_id_tag).prop("checked")){
          MST_and_HBR2.push(document.getElementById(DISPLAYPORT_CheckBox_MST_and_HBR2_enable_id).value);
          Database_id_value_String=Database_id_value_String+'document.getElementById("'+DISPLAYPORT_CheckBox_MST_and_HBR2_enable_id+'").checked=true;';   
          MST_and_HBR2_database_id.push(DISPLAYPORT_CheckBox_MST_and_HBR2_enable_id);
        }else {
          MST_and_HBR2.push("Disable");
          Database_id_value_String=Database_id_value_String+'document.getElementById("'+DISPLAYPORT_CheckBox_MST_and_HBR2_enable_id+'").checked=false;';   
          MST_and_HBR2_database_id.push(DISPLAYPORT_CheckBox_MST_and_HBR2_enable_id);
          
        }
        PWM_working_frequency_HZ.push("none");
        PWM_working_frequency_HZ_database_id.push("none");
      }
    }
  }
 }

///////////////////////////////////////
//將TextView的值存入欄位
  //function 化
  function pushTextViewValue(TextArray,TextViewName){
  TextArray.push(TextViewName.value);
  }
 //將下拉選單中被選中的資料存入欄位
 //function 化
  function pushSelectValue(selectarray,selectname){
    for (i=1; i<selectname.length; i++){
    if (selectname[i].selected){
      selectarray.push(selectname[i].value);
      break;
    }
  }
  }


  /////////////-----------------------------
function dialog() {

  // Declare variables
  var dialogBox = $('.dialog'),
      dialogTrigger = $('.dialog__trigger'),
      dialogClose = $('.dialog__close'),
      dialogTitle = $('.dialog__title'),
      dialogContent = $('.dialog__content'),
      dialogAction = $('.dialog__action');

  // Open the dialog
  dialogTrigger.on('click', function(e) {
    dialogBox.toggleClass('dialog--active');
    e.stopPropagation();
  });

  // Close the dialog - click close button
  dialogClose.on('click', function() {
    dialogBox.removeClass('dialog--active');
  });

  // Close the dialog - press escape key // key#27
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      dialogBox.removeClass('dialog--active');
    }
  });

  // Close the dialog - click outside
  $(document).on('click', function(e) {
    if ($(e.target).is(dialogBox) === false &&
        $(e.target).is(dialogTitle) === false &&
        $(e.target).is(dialogContent) === false &&
        $(e.target).is(dialogAction) === false) {
      dialogBox.removeClass('dialog--active');   
    }
  });
window.onload=(function(e) {
    dialogBox.toggleClass('dialog--active');
    e.stopPropagation();
  });

}

// Run function
$(dialog);
  ////////////------------------------------











////////////////////////////////////////////////GPIO_Active_HI_LOW('Select_REG_HOT_AC_BATT_0',this)

function GPIO_Active_HI_LOW(id,Selected){
  var divActive_HI_LOW_department="Div_Active_HI_LOW_"+id;
  var list = document.getElementById(divActive_HI_LOW_department);
  var Active_HI_LOW_department=new Array();
  Active_HI_LOW_department[0]=["N/A"];
  Active_HI_LOW_department[1]=["N/A","Active Hi","Active Low"];
  if(Selected.value=="N/A"){
   // document.getElementById("Active_HI_LOW_"+id).options.length=Active_HI_LOW_department[0].length;
   // document.getElementById("Active_HI_LOW_"+id).options[0]=new Option("N/A","N/A");
    if (list.hasChildNodes()) {
      for(var i=0; i<list.childNodes.length;i++){
       // console.log(list.childNodes[i]);
        list.removeChild(list.childNodes[i]);
      }
    }
  }else{
    
    if (list.hasChildNodes()) {
      for(var i=0; i<list.childNodes.length;i++){
       // console.log(list.childNodes[i]);
        list.removeChild(list.childNodes[i]);
      }
    }
    $('#'+divActive_HI_LOW_department).append('<select style="width: 100%;" class="form-control" name="Active_HI_LOW_'+id+'" id="Active_HI_LOW_'+id+'"required="" ><option value="">Select...</option><option value="Active Hi">Active Hi</option><option value="Active Low">Active Low</option></select>');
    //document.getElementById("Active_HI_LOW_"+id).options.length=Active_HI_LOW_department[1].length;
    //document.getElementById("Active_HI_LOW_"+id).options[0]=new Option("N/A","N/A");
    //document.getElementById("Active_HI_LOW_"+id).options[1]=new Option("Active Hi","Active Hi");
    //document.getElementById("Active_HI_LOW_"+id).options[2]=new Option("Active Low","Active Low");
   onTime_check_all_GPIO_pin_repeat_or_not(id,Selected);
  }
}

//將Feature and GPIO strap pin define的資料做整理
function PUSH_Feature_and_GPIO_strap_pin_define(){
  /*REG_HOT_AC_BATT.push(document.getElementById("Select_REG_HOT_AC_BATT_0").value);
  REG_HOT_AC_BATT.push(document.getElementById("Active_HI_LOW_Select_REG_HOT_AC_BATT_0").value);
  VDDC_VRHOT_GPIO_Pin.push(document.getElementById("Select_VDDC_VRHOT_GPIO_Pin_0").value);
  VDDC_VRHOT_GPIO_Pin.push(document.getElementById("Active_HI_LOW_Select_VDDC_VRHOT_GPIO_Pin_0").value);
  PEAK_CURRENT_CONTROL_PCC_SUPPORT.push(document.getElementById("Select_PEAK_CURRENT_CONTROL_PCC_SUPPORT_0").value);
  PEAK_CURRENT_CONTROL_PCC_SUPPORT.push(document.getElementById("Active_HI_LOW_Select_PEAK_CURRENT_CONTROL_PCC_SUPPORT_0").value);
  DRAM_self_refresh_GPIO.push(document.getElementById("Select_DRAM_self_refresh_GPIO_0").value);
  DRAM_self_refresh_GPIO.push(document.getElementById("Active_HI_LOW_Select_DRAM_self_refresh_GPIO_0").value);
  Stereo_3D.push(document.getElementById("Select_Stereo_3D_0").value);
  Stereo_3D.push(document.getElementById("Active_HI_LOW_Select_Stereo_3D_0").value); */
  Check_Feature_and_GPIO_strap_pin_define("Select_REG_HOT_AC_BATT_0",REG_HOT_AC_BATT);
  Check_Feature_and_GPIO_strap_pin_define("Select_VDDC_VRHOT_GPIO_Pin_0",VDDC_VRHOT_GPIO_Pin);
  Check_Feature_and_GPIO_strap_pin_define("Select_PEAK_CURRENT_CONTROL_PCC_SUPPORT_0",PEAK_CURRENT_CONTROL_PCC_SUPPORT);
  Check_Feature_and_GPIO_strap_pin_define("Select_DRAM_self_refresh_GPIO_0",DRAM_self_refresh_GPIO);
  Check_Feature_and_GPIO_strap_pin_define("Select_Stereo_3D_0",Stereo_3D);

}
function Check_Feature_and_GPIO_strap_pin_define(id,Array_Name){
  var Active_Hi_Low_id="Active_HI_LOW_"+id;
  if(document.getElementById(id).value=="N/A"){
    Array_Name.push("N/A");
    Array_Name.push("N/A");
        Database_id_value_String=Database_id_value_String+'document.getElementById("'+id+'").value="'+document.getElementById(id).value+'";';   
        //Database_id_value_String=Database_id_value_String+'document.getElementById("'+id+'").value="'+document.getElementById(id).value+'";';   

  }else{
    Array_Name.push(document.getElementById(id).value);
    Array_Name.push(document.getElementById(Active_Hi_Low_id).value);
        Database_id_value_String=Database_id_value_String+'document.getElementById("'+id+'").value="'+document.getElementById(id).value+'";';   
        Database_id_value_String=Database_id_value_String+'document.getElementById("'+Active_Hi_Low_id+'").value="'+document.getElementById(Active_Hi_Low_id).value+'";';   

  }
}

  
  
function dialog_message() {

  // Declare variables
  var dialog_messageBox = $('.dialog_message'),
      dialog_messageTrigger = $('.dialog_message__trigger'),
      dialog_messageClose = $('.dialog_message__close'),
      dialog_messageTitle = $('.dialog_message__title'),
      dialog_messageContent = $('.dialog_message__content'),
      dialog_messageAction = $('.dialog_message__action');

  // Open the dialog_message
  dialog_messageTrigger.on('click', function(e) {
    dialog_messageBox.toggleClass('dialog_message--active');
    e.stopPropagation();
  });

  // Close the dialog_message - click close button
  dialog_messageClose.on('click', function() {
    dialog_messageBox.removeClass('dialog_message--active');
  });
  $('#Know_close').on('click', function() {
    dialog_messageBox.removeClass('dialog_message--active');
  });
  // Close the dialog_message - press escape key // key#27
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      dialog_messageBox.removeClass('dialog_message--active');
    }
  });

  // Close the dialog_message - click outside
  /*$(document).on('click', function(e) {
    if ($(e.target).is(dialog_messageBox) === false &&
        $(e.target).is(dialog_messageTitle) === false &&
        $(e.target).is(dialog_messageContent) === false &&
        $(e.target).is(dialog_messageAction) === false) {
      dialog_messageBox.removeClass('dialog_message--active');   
    }
  });*/

}
function Message_Alert(b_title,p_message_string){

  document.getElementById("b_title").innerHTML=b_title;
  document.getElementById("p_Message_string").innerHTML=p_message_string;
 
  $('.dialog_message').toggleClass('dialog_message--active');
  
 
}
// Run function
$(dialog_message);

//ReLoad
function dialog_Load() {

  // Declare variables
  var dialog_LoadBox = $('.dialog_Load'),
      dialog_LoadTrigger = $('.dialog_Load__trigger'),
      dialog_LoadClose = $('.dialog_Load__close'),
      dialog_LoadTitle = $('.dialog_Load__title'),
      dialog_LoadContent = $('.dialog_Load__content'),
      dialog_LoadAction = $('.dialog_Load__action');

  // Open the dialog_Load
  dialog_LoadTrigger.on('click', function(e) {
    dialog_LoadBox.toggleClass('dialog_Load--active');
    e.stopPropagation();
  });
  $('#Load-tab').on('click',function(){
     dialog_LoadBox.toggleClass('dialog_Load--active');
   
  });

  // Close the dialog_Load - click close button
  dialog_LoadClose.on('click', function() {
    dialog_LoadBox.removeClass('dialog_Load--active');
  });
  $('#ReLoad_button').on('click', function() {
    dialog_LoadBox.removeClass('dialog_Load--active');
  });
  // Close the dialog_Load - press escape key // key#27
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      dialog_LoadBox.removeClass('dialog_Load--active');
    }
  });

}
$(dialog_Load);
// Check for File API support
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }

// Select and upload file
  // Click to select file
  function selectFile(event){
    document.getElementById("file").click();
    document.getElementById("dropzoneLoading").className = "hidden";
    document.getElementById("dropzoneContent").className = "hidden";
    document.getElementById("dropzonePlaceholder").className = "";
    document.getElementById("dropzone").className = "";
    document.getElementById("dropzoneContent").innerHTML = "";
  }
  // Get and read selected file
  function openFile(event) {
    // Loading
    document.getElementById("dropzonePlaceholder").className = "hidden";
    document.getElementById("dropzoneLoading").className = "";
    // Get selected file
    var input = event.target;
    var meta = input.files[0];
    var filename =  meta.name;
    // Check for valid file
    if((filename.substring((filename.length-4))).toLowerCase() != ".csv"){
      alert('Invalid file type');
      document.getElementById("dropzoneLoading").className = "hidden";
      document.getElementById("dropzonePlaceholder").className = "";
      return false;
    }
    // Read file
    var reader = new FileReader();
    reader.onload = function(){
      // Add filename to box
      document.getElementById("dropzoneLoading").className = "hidden";
      document.getElementById("dropzoneContent").innerHTML = filename;
      document.getElementById("dropzoneContent").className = "";
      document.getElementById("dropzone").className = "full";
    };
    reader.readAsText(input.files[0]);
    reader.onloadend = function(event){
      // Callback when done reading file
      strToJson(event);
    }
  };

// Drag and drop file
  function dragFile(event){
    // Prevent default behavior while dragging
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }
  // Read file with FileReader
  function dropFile(event){
    // Loading
    document.getElementById("dropzonePlaceholder").className = "hidden";
    document.getElementById("dropzoneLoading").className = "";
    // Prevent defaults
    event.stopPropagation();
    event.preventDefault();
    // Get dropped file
    var files = event.dataTransfer.files;
    var meta = files[0];
    var filename =  meta.name;
    // Check for valid file
    if((filename.substring((filename.length-4))).toLowerCase() != ".csv"){
      alert('Invalid file type');
      document.getElementById("dropzoneLoading").className = "hidden";
      document.getElementById("dropzonePlaceholder").className = "";
      return false;
    }
    // Read file
    var reader = new FileReader();
    reader.onload = function(){
      // Add filename to box
      document.getElementById("dropzoneLoading").className = "hidden";
      document.getElementById("dropzoneContent").innerHTML = filename;
      document.getElementById("dropzoneContent").className = "";
      document.getElementById("dropzone").className = "full";
    };
    reader.readAsText(files[0]);
    reader.onloadend = function(event){
      // Callback when done reading file
      strToJson(event);
    }
  }
  // Bind events to functions to enable file drag and drop
  var dropZone = document.getElementById('dropzone');
  dropZone.addEventListener('dragover', dragFile, false);
  dropZone.addEventListener('drop', dropFile, false);

// Process file string into JSON
  function strToJson(event){
    // Get file from drop or select method
    var result;
    if("result" in event.target){
      result = event.target.result;
    } else {
      result = event.dataTransfer.files; 
    }
    // Split string into rows then columns
    var json = [], str, arrX, o, q, arr;
    var rows = result.split(/\r\n|\n/);
    for(var i=0, r; r=rows[i]; i++){
      // Only basic double quotes
      str = r.replace(/“|”/g, "\"");
      // Allow for commas if enclosed with double quotes
      arr = [];
      arrX = str.split('');
      o = 0;  // Offset of string
      q = false;  // Monitor if between quotes
      for(var j=0, k; k=arrX[j]; j++){
        if(k == "," && q === false){
          arr.push(str.substring(o, j));
          o = j + 1;
        }
        if(q === false && k == '"'){
          q = true;
          continue;
        }
        if(q === true && k == '"'){
          q = false;
        }
      }
      // String after last comma
      arr.push(str.substring(o, j));
      // Remove double quotes after checking for enclosed commas
      /*for(var j=0, k; k=arr[j]; j++){
        arr[j] = k.replace(/"/g, "");
      }*/
      // Add row to JSON array
      json.push(arr);
    }
    //console.log(json);
    // Do something with JSON of file data
    //console.log(JSON.stringify(json));
    $('#ReLoad_button').on('click',function(){
      
        jsonTable(json);
        if(document.getElementById("Result-tab")!=null){
          $("#Result-tab").remove();
        }
      
      

    });
  }

// JSON to HTML table
  function jsonTable(json){
    /*var body = "<table>";
    for(var i=0, r; r=json[i]; i++){
      body += "\t<tr>";
      for(var j=0; j<json[i].length; j++){
        body += "\t\t<td>"+json[i][j]+"</td>";
      }
      body += "\t</tr>";
    }
    body += "</table>";*/
    //console.log(json[json.length-1][0]);
    var json_reload=json[json.length-1][0].replace(/,/g," html_point ");
    json_reload=json_reload.replace(/html_point/g,",");
   // document.getElementById("data").innerHTML = body;
     //var htmlStr=removepointcinese.replace(/html_point/g,",");       
     $("#My_Container_form").remove();
    $("#My_Container").append(json_reload);
    if(document.getElementById("Platform_design").value=="HG"){
        if(document.getElementById("Connectors-tab")!=null){
          $("#Connectors-tab").remove();
        }
    }else{
      if(document.getElementById("Connectors-tab")==null){
         $("#if_platform_design_select_HG_or_other_then_Hide_it_or_not").append('<div> <a id="Connectors-tab"href="#Connectors_tab">Connectors</a></div>');
        }
    }
    VBIOS_Result_Table_Create_Counter=html_save_VBIOS_Result_Table_Create_Counter;
formcount=html_save_formcount;
MODULE_SELECT_FROM_STRAP_PIN_item_count=html_save_MODULE_SELECT_FROM_STRAP_PIN_item_count;
Insert_Memory_Module_Information_block_form_count=html_save_Insert_Memory_Module_Information_block_form_count;
Source_Type_item_creat_count=html_save_Source_Type_item_creat_count;
Connector_form_count=html_save_Connector_form_count;
    //console.log((json[json.length-1]));
  }
//從html上的script做資料串接

