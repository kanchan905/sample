import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: '1', title: 'Cloud Accounts', value: '2 Total' , type: 'donut' },
        { id: '2', title: 'Cloud Account Risk Assessment', value: '9659 Total',type: 'donut'  },
      ],
    },
    {
      id: 'cwpp',
      name: 'CWPP Dashboard',
      widgets: [
        { id: '3', title: 'Top 5 Namespace Specific Alerts', value: 'No Graph data available',type: 'radial' },
        { id: '4', title: 'Workload Alerts', value: 'No Graph data available' ,type: 'radial'},
      ],
    },
    {
      id: 'registry',
      name: 'Registry Scan',
      widgets: [
        { id: '5', title: 'Image Risk Assessment', value: '1470 Total Vulnerabilities',type: 'bar'},
        { id: '6', title: 'Image Security Issues', value: '2 total images',type: 'bar'},
      ],
    },
  ],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
        const { categoryId, widgetId } = action.payload;
        const category = state.categories.find(cat => cat.id === categoryId);
        if (category) {
          category.widgets = category.widgets.filter(w => w.id !== widgetId);
        }
      },  
  },
});

export const { addWidget,removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
