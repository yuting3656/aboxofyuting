import { Component, OnInit, forwardRef, AfterViewInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { EmailTemplateEditorLinkRenderComponent } from './email-template-editor-link-render/email-template-editor-link-render.component';


export const TINYMCE_VALUE_ACCESSOR: any ={
  provide:  NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmailTemplateEditorComponent),
  multi: true
}

@Component({
  selector: 'ngx-email-template-editor',
  templateUrl: './email-template-editor.component.html',
  styleUrls: ['./email-template-editor.component.scss'],
  providers: [TINYMCE_VALUE_ACCESSOR]
})
export class EmailTemplateEditorComponent implements OnInit {
//      OnInit,
//      AfterViewInit,
//      OnDestroy,
//      ControlValueAccessor {



  constructor() { }

  ngOnInit() {
  }

  source = [
    {
      emailName: '註冊',
      emailTemplateCode: 'reg',
      emailStatus: 'Y', 
    },
    {
      emailName: '活動邀請',
      emailTemplateCode: 'invite',
      emailStatus: 'Y',
    },
  ]

  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      emailName:{
        title: '範本名字',
        type: 'custom',
        filter: false,
        renderComponent: EmailTemplateEditorLinkRenderComponent,
      },
      emailTemplateCode:{
        title: '代碼',
        type: 'string',
        filter: false,
      },
      emailStatus:{
        title: '狀態',
        type: 'string',
        filter: false,
        valuePrepareFunction: (emailStatus: any)=> {
          if (emailStatus == 'Y'){
            return `啟用`
          } else{
            return `關閉`
          }
        }
      }
    }
  }

  
}
