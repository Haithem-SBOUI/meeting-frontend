// shared/shared.module.ts
import {NgModule} from '@angular/core';
import {TruncatePipe} from "./pipe/truncate.pipe";
import {FormatDateTimePipe} from "./pipe/format-date-time.pipe";

@NgModule({
  declarations: [
    TruncatePipe,
    FormatDateTimePipe
  ],
  exports: [
    TruncatePipe,
    FormatDateTimePipe
  ],
})
export class SharedModule {
}
